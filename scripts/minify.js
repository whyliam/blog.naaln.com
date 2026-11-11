/* global hexo */
'use strict';

// Keep build optimizations without obsolete native imagemin download/extract tools.
const { minify: html } = require('html-minifier-terser');
const CleanCSS = require('clean-css');
const { minify: js } = require('terser');
const sharp = require('sharp');
const { optimize: svg } = require('svgo');

const settings = hexo.config.all_minifier;
if (settings !== false && settings?.enable !== false) {
  if (settings?.html_minifier?.enable !== false) {
    hexo.extend.filter.register('after_render:html', source => html(source, {
      collapseWhitespace: true,
      conservativeCollapse: true,
      removeComments: true,
      ignoreCustomComments: [/^\s*more/],
      minifyJS: true,
      minifyCSS: true
    }));
  }
  if (settings?.css_minifier?.enable !== false) {
    hexo.extend.filter.register('after_render:css', source => {
      const result = new CleanCSS({ level: 1 }).minify(source);
      if (result.errors.length) throw new Error(result.errors.join('\n'));
      return result.styles;
    });
  }
  if (settings?.js_minifier?.enable !== false) {
    hexo.extend.filter.register('after_render:js', async (source, data = {}) => {
      const result = await js(source, { module: data.path?.endsWith('.mjs') || false });
      return result.code;
    });
  }
  if (settings?.image_minifier?.enable !== false) {
    hexo.extend.filter.register('after_generate', async function() {
      const paths = this.route.list().filter(path => /\.(png|jpe?g|gif|svg)$/i.test(path));
      for (let start = 0; start < paths.length; start += 4) {
        await Promise.all(paths.slice(start, start + 4).map(async path => {
          const chunks = [];
          for await (const chunk of this.route.get(path)) chunks.push(Buffer.from(chunk));
          const original = Buffer.concat(chunks);
          let result;
          if (/\.svg$/i.test(path)) {
            result = Buffer.from(svg(original.toString(), { path }).data);
          } else if (/\.png$/i.test(path)) {
            result = await sharp(original).png({ compressionLevel: 9 }).toBuffer();
          } else if (/\.gif$/i.test(path)) {
            result = await sharp(original, { animated: true }).gif().toBuffer();
          } else {
            // Use high quality and preserve metadata; only keep a smaller result.
            result = await sharp(original).withMetadata().jpeg({ quality: 100, mozjpeg: true }).toBuffer();
          }
          if (result.length < original.length) this.route.set(path, result);
        }));
      }
    });
  }
}
