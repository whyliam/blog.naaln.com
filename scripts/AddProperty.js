'use strict';

/**
 * 为文章添加 Open Graph 元数据，优化微信分享显示
 */

// 提取默认图片为常量，避免重复代码
const getDefaultImage = (hexo) => {
  // 从主题配置中获取头像URL
  return hexo.theme.config.avatar.url || 'https://pics.naaln.com/48910e01gw1ef5p6etuzdj20rs0rs771.jpg';
};

hexo.extend.filter.register('after_post_render', function(data) {
  // 只处理文章类型
  if (!data.layout || data.layout !== 'post') {
    return data;
  }

  // 获取文章信息
  const title = data.title || hexo.config.title;
  
  // 保存原始的excerpt，确保不会修改它
  const originalExcerpt = data.excerpt;
  
  // 为OG标签准备description
  let description = data.description || data.excerpt || data.content || hexo.config.description;
  
  // 获取文章中的第一张图片作为缩略图
  let image = '';
  const imgRegex = /<img[^>]+src="([^">]+)"/i;
  const match = data.content.match(imgRegex);
  if (match && match[1]) {
    image = match[1];
    // 确保图片URL是完整的
    if (image.startsWith('/')) {
      image = hexo.config.url + image;
    }
  } else {
    // 如果文章中没有图片，使用默认图片
    image = getDefaultImage(hexo);
  }

  // 构建Open Graph元数据
  const ogTags = `
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${image}" />
<meta property="og:url" content="${data.permalink}" />
`;

  // 将元数据添加到文章内容中
  // 在</head>标签前插入
  if (data.content.includes('</head>')) {
    data.content = data.content.replace('</head>', ogTags + '</head>');
  } else {
    // 如果没有</head>标签，可能是部分渲染，将标签添加到内容开头
    data.content = ogTags + data.content;
  }
  
  // 确保excerpt不被修改
  if (originalExcerpt) {
    data.excerpt = originalExcerpt;
  }

  return data;
});

// 在生成阶段检查图片大小并更新HTML文件
hexo.extend.filter.register('after_generate', async function() {
  const fs = require('fs');
  const path = require('path');
  const fetch = require('node-fetch');
  const routes = hexo.route.list();
  
  // 创建图片大小缓存
  const imageSizeCache = {};
  // 缓存文件路径
  const cacheFilePath = path.join(hexo.base_dir, '.image-size-cache.json');
  const MIN_IMAGE_SIZE = 300 * 1024; // 300KB 最小图片大小要求
  const MAX_CONCURRENT_REQUESTS = 10; // 限制并发请求数量
  const CACHE_EXPIRY_DAYS = 180; // 缓存过期时间（天）
  
  // 检查是否在GitHub Actions环境中运行
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
  
  // 尝试加载现有缓存
  try {
    if (fs.existsSync(cacheFilePath)) {
      const cacheData = fs.readFileSync(cacheFilePath, 'utf8');
      const parsedCache = JSON.parse(cacheData);
      
      // 检查缓存版本和过期时间
      const now = new Date().getTime();
      const validEntries = {};
      let expiredCount = 0;
      
      // 遍历缓存条目，过滤掉过期的条目
      Object.entries(parsedCache).forEach(([url, entry]) => {
        // 如果是旧版本缓存格式（直接存储布尔值），则转换为新格式
        if (typeof entry === 'boolean') {
          validEntries[url] = {
            isLargeEnough: entry,
            timestamp: now,
          };
        } 
        // 检查缓存条目是否过期
        else if (entry.timestamp && (now - entry.timestamp) < CACHE_EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
          validEntries[url] = entry;
        } else {
          expiredCount++;
        }
      });
      
      Object.assign(imageSizeCache, validEntries);
      console.log(`已加载图片大小缓存，共 ${Object.keys(imageSizeCache).length} 条有效记录${expiredCount > 0 ? `，${expiredCount} 条记录已过期` : ''}`);
    }
  } catch (error) {
    console.error('加载图片缓存失败:', error.message);
  }
  
  // 检查图片大小的函数
  const checkImageSize = async (imgUrl) => {
    // 跳过无效URL
    if (!imgUrl || !imgUrl.startsWith('http')) {
      console.warn(`跳过无效URL: ${imgUrl}`);
      return false;
    }
    
    // 检查缓存中是否已有该图片的大小信息
    if (imageSizeCache.hasOwnProperty(imgUrl) && imageSizeCache[imgUrl].isLargeEnough !== undefined) {
      return imageSizeCache[imgUrl].isLargeEnough;
    }
    
    try {
      // 检查图片大小
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8秒超时
      
      const response = await fetch(imgUrl, { 
        method: 'HEAD', 
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const contentLength = response.headers.get('content-length');
      // 判断图片是否大于300KB
      const isLargeEnough = contentLength && parseInt(contentLength) > MIN_IMAGE_SIZE;
      
      // 更新缓存，添加时间戳
      imageSizeCache[imgUrl] = {
        isLargeEnough,
        timestamp: new Date().getTime(),
        size: contentLength ? parseInt(contentLength) : null
      };
      
      console.log(`检查图片大小: ${imgUrl}, 大小: ${contentLength ? Math.round(parseInt(contentLength)/1024) + 'KB' : '未知'}, 符合要求: ${isLargeEnough}`);
      return isLargeEnough;
    } catch (error) {
      console.error(`检查图片大小失败: ${imgUrl}`, error.message);
      // 出错时默认使用默认图标，并添加时间戳
      imageSizeCache[imgUrl] = {
        isLargeEnough: false,
        timestamp: new Date().getTime(),
        error: error.message
      };
      return false;
    }
  };
  
  // 批量处理函数，限制并发请求数量
  const processBatch = async (items, processFn, batchSize) => {
    const results = [];
    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);
      const batchResults = await Promise.all(batch.map(processFn));
      results.push(...batchResults);
      // 每批次处理完成后保存一次缓存
      if (i > 0 && i % 50 === 0) {
        try {
          fs.writeFileSync(cacheFilePath, JSON.stringify(imageSizeCache, null, 2), 'utf8');
          console.log(`已保存中间缓存，处理进度: ${i}/${items.length}`);
        } catch (error) {
          console.error('保存中间缓存失败:', error.message);
        }
      }
    }
    return results;
  };
  
  // 只处理HTML文件
  const htmlRoutes = routes.filter(route => route.endsWith('.html'));
  let cacheUpdated = false;
  
  // 处理单个HTML文件的函数
  const processHtmlFile = async (route) => {
    try {
      const content = hexo.route.get(route).toString();
      
      // 查找og:image标签
      const ogImageRegex = /<meta property="og:image" content="([^">]+)"/i;
      const match = content.match(ogImageRegex);
      
      if (match && match[1]) {
        const imgUrl = match[1];
        const isLargeEnough = await checkImageSize(imgUrl);
        cacheUpdated = true;
        
        // 如果图片小于300KB，替换为默认图标
        if (!isLargeEnough) {
          const defaultImage = getDefaultImage(hexo);
          const updatedContent = content.replace(
            new RegExp(`<meta property="og:image" content="${imgUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'i'),
            `<meta property="og:image" content="${defaultImage}"`
          );
          
          // 更新路由内容
          hexo.route.set(route, updatedContent);
          console.log(`已将不符合要求的图片替换为默认图标: ${route}`);
        }
      }
      return true;
    } catch (error) {
      console.error(`处理HTML文件失败: ${route}`, error.message);
      return false;
    }
  };
  
  // 使用批量处理函数处理所有HTML文件
  await processBatch(htmlRoutes, processHtmlFile, MAX_CONCURRENT_REQUESTS);
  
  // 如果缓存有更新，保存到文件
  if (cacheUpdated) {
    try {
      fs.writeFileSync(cacheFilePath, JSON.stringify(imageSizeCache, null, 2), 'utf8');
      console.log('已更新图片大小缓存，共 ' + Object.keys(imageSizeCache).length + ' 条记录');
      
      // 在GitHub Actions中，输出缓存文件路径，方便后续步骤使用
      if (isGitHubActions) {
        console.log(`::set-output name=cache-file::${cacheFilePath}`);
      }
    } catch (error) {
      console.error('保存图片缓存失败:', error.message);
    }
  }
});