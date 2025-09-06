---
title: vuejs中methods中的互相调用
date: 2017/01/18 04:32:10
categories:
- 技术
tags:
---

vuejs 中 methods 中的方法可以互相调用吗

如一下的代码，想要在 test3 中调用 test2 的代码。

```vue
new Vue({
  el: '#app',
  data: {
    test: 'test',
  },
  methods: {
    test1: function() {
      alert(this.test)
    },
    test2: function() {
      alert("this is test2")
      alert(this.test)
    },
    test3: function() {
      this.test2();
      //
    }
  }
})
```

methods 中的 `function` 中的 `this` 指向 `vue` 实例，没有任何的 `this` 绑定，所以肯定访问不到。

可以尝试

```
this.$options.methods.test2.bind(this)();
```

这是 vue 的调用方式

```
/**
 * Setup instance methods. Methods must be bound to the
 * instance since they might be passed down as a prop to
 * child components.
 */
Vue.prototype._initMethods = function() {
  var methods = this.$options.methods
  if (methods) {
    for (var key in methods) {
      this[key] = bind(methods[key], this)
    }
  }
}

function bind(fn, ctx) {
  return function(a) {
    var l = arguments.length
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx)
  }
}
```
