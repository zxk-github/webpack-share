const { SyncBailHook } = require('tapable');

// 只要监听的函数中有一个返回值不为null,就停止后面监听函数的执行

let syncBailHook = new SyncBailHook(['test1', 'test2']);

syncBailHook.tap('l1', (msg) => {
  console.log(msg, 'l1')
})

syncBailHook.tap('l2', (msg) => {
  console.log(msg, 'l2')
})

syncBailHook.tap('l3', (msg) => {
  console.log(msg, 'l3')
})

syncBailHook.call('hello world');
