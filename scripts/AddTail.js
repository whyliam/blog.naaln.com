hexo.extend.filter.register("after_post_render", function (data) {
  var before_content = "";
  before_content +=
    '<p class="cc">本文首发于<a href="https://blog.naaln.com">Why·Liam·Blog (https://blog.naaln.com)</a>，版权所有，侵权必究。</p>';
  before_content +=
    '<p class="cc">本文永久链接：<a href="' +
    data.permalink +
    '">' +
    data.permalink +
    "</a><p>";

  var file_content = "";
  file_content +=
    '<p class="cc">The <a href="https://blog.naaln.com">Why·Liam·Blog</a> by <a href="https://www.naaln.com" target="_blank" rel="external">WhyLiam</a> is licensed under a <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="external">Creative Commons BY-NC-ND 4.0 International License</a>.</p>';
  file_content +=
    '<p class="cc">由<a href="https://www.naaln.com" target="_blank" rel="external">WhyLiam</a>创作并维护的<a href="https://blog.naaln.com">Why·Liam·Blog</a>采用创作共用<a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="external">保留署名-非商业-禁止演绎4.0国际许可证</a>。</p>';
  file_content +=
    '<p class="cc">本文首发于<a href="https://blog.naaln.com">Why·Liam·Blog (https://blog.naaln.com)</a>，版权所有，侵权必究。</p>';
  file_content +=
    '<p class="cc">本文永久链接：<a href="' +
    data.permalink +
    '">' +
    data.permalink +
    "</a><p>";

  try {
    if (file_content && data.content.length > 50) {
      data.content = data.content + file_content;
    }
  } catch (err) {
    if (err.code !== "ENOENT") throw err;

    // No process for ENOENT error
  }

  return data;
});
