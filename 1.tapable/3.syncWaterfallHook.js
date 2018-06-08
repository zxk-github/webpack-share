const { SyncWaterfallHook } = require('tapable'); 

const waterfall = new SyncWaterfallHook(['waterfall1', 'waterfall2']);

waterfall.tap('plugin1', (arg1, arg2) => {
  console.log(arg1, arg2, 'plugin1');
  // return 1;
})

waterfall.tap('plugin2', (topValue) => {
  console.log(topValue, 'plugin2');
  // return undefined;
  return null
})

waterfall.tap('plugin3', (topValue) => {
  console.log(topValue, 'plugin3');
})


// waterfall.call('water1', 'water2')


// 上一个插件存在返回值并且不是undefined，下一个插件会直接使用，如果是undefined，会取最近不是undefined的值

// 使用callAsync和promise触发钩子

// waterfall.callAsync("callAsync1", "callAsync2", (data) => {
//   console.log(data) //回调接受的值是最后一个plugin执行的返回值
// })


// waterfall.promise("promise1", "promise2").then((data) => {
//   console.log(data)
// })