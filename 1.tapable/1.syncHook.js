const { SyncHook }  = require('tapable');

let syncHook = new SyncHook(['syncHook', 'syncHook1']);

syncHook.tap('l1', (name1, name2) => {
  console.log(name1, name2, 'l1');  // 传入的参数需要和创建实例的时候传入数量保持一致， 否则获取不到多出来的参数
  // return 'l1'
})

syncHook.tap('l2', (name1) => {
  console.log(name1, 'l2');
  return 'l2'
})

// syncHook.tap('l3', (name) => {
//   console.log(name, 'l3')
// })

// 按顺序执行函数，不关心函数返回值，一定会执行完所有函数
syncHook.call('syncHookArg', 'syncHookArg1')
