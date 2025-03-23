"use strict";

hexo.extend.injector.register(
  "head_end",
  function () {
    return '<script>requestAnimationFrame(()=>window.innerWidth<=767&&window.scrollTo({top:120,behavior:"smooth"}))</script>';
  },
  "post"
);
