// 跟随base 路径
layui.config({
  base: './mymod/' //假设这是你存放拓展模块的根目录
}).extend({ //设定模块别名
  himod: 'himod' //如果 himod.js 是在根目录，也可以不用设定别名  见config3.js
})
  