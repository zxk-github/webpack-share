const { SyncBailHook } = require('tapable');



let syncBailHook = new SyncBailHook(['syncBailHook1', 'syncBailHook2']);

syncBailHook.tap('plugin1', (msg) => {
  console.log(msg, 'plugin1')
  return undefined;
})

syncBailHook.tap('plugin2', (msg) => {
  console.log(msg, 'plugin2')
  // return null;
  // return 1;
})

syncBailHook.tap('plugin3', (msg) => {
  console.log(msg, 'plugin3')
})

syncBailHook.call('syncBailHookArg');

// 只要注册插件存在返回值，并且返回值不为undefined,就停止后面插件的执行

// 使用callAsync 和 promise触发钩子执行插件
syncBailHook.callAsync('callAsync', 'callAsync', () => {
  console.log('callAsync方式调用')
})

syncBailHook.promise('promise').then(() => {
  console.log('promise 方式进行调用')
})

