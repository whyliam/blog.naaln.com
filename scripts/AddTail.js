hexo.extend.filter.register("after_post_render", function (data) {
  if (!data.content || data.content.length <= 50) return data;

  const tail = `<div class="post-tail" style="height:0;overflow:hidden;opacity:0;position:absolute;pointer-events:none;" aria-hidden="true">`
    + `<p>本文作者：WhyLiam</p>`
    + `<p>本文链接：<a href="${data.permalink}">${data.permalink}</a></p>`
    + `<p>版权声明：本文采用 CC BY-NC-ND 4.0 许可协议，转载请注明出处。</p>`
    + `<p>首发站点：Why·Liam·Blog (https://blog.naaln.com)</p>`
    + `</div>`;

  data.content += tail;
  return data;
});
