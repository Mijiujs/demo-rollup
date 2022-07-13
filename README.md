# rollup-demo
### 输出格式
iife：自执行函数，通过<script>标签加载
amd：异步模块定义，可通过requirejs加载
cjs：node默认的模块规范，可用webpack加载
umd：兼容iife、amd、cjs三种模块规范
es：es module规范，可用webpack，rollup加载

### CommonJS
导出使用module.exports、exports，加载模块使用require('xxx')
exports对象实际上只是对module.exports的引用

### AMD（异步模块定义 requireJS 2010）
AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
浏览器端的解决方案
AMD推崇依赖前置
```
define(['./a', './b'], function (a, b) {
  a.doSomething()
  b.doSomething()
})
```

### CMD （通用模块定义 seaJS 2011）
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
浏览器端的解决方案
CMD推崇依赖就近
```
define(function (require, exports, module) {
  var a = require('./a') 
  a.doSomething()
  var b = require('./b')  
  b.doSomething()
  // ... 
})
```

### ES Module与CommonJS
CommonJS模块是对象，是运行时加载，运行时才把模块挂载在exports之上（加载整个模块的所有），加载模块其实就是查找对象属性。
ES Module不是对象，是使用export显示指定输出，再通过import输入。此法为编译时加载，编译时遇到import就会生成一个只读引用。等到运行时就会根据此引用去被加载的模块取值。所以不会加载模块所有方法，仅取所需
CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

### RequirJS 和 SeaJS 的区别
定位有差异。RequireJS 想成为浏览器端的模块加载器，同时也想成为 Rhino / Node 等环境的模块加载器。Sea.js 则专注于 Web 浏览器端，同时通过 Node 扩展的方式可以很方便跑在 Node 环境中。
推广理念有差异。RequireJS 在尝试让第三方类库修改自身来支持 RequireJS，目前只有少数社区采纳。Sea.js 不强推，采用自主封装的方式来“海纳百川”，目前已有较成熟的封装策略。
对开发调试的支持有差异。Sea.js 非常关注代码的开发调试，有 nocache、debug 等用于调试的插件。RequireJS 无这方面的明显支持。
插件机制不同。RequireJS 采取的是在源码中预留接口的形式，插件类型比较单一。Sea.js 采取的是通用事件机制，插件类型更丰富。


