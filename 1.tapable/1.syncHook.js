const { SyncHook }  = require('tapable');

let syncHook = new SyncHook(['arg1', 'arg2']);

syncHook.tap('plugin1', (name1, name2) => {
  console.log(name1, name2, 'l1');  
  // return 'l1'
})

syncHook.tap('plugin2', (name1) => {
  console.log(name1, 'l2');
  return 'l2'
})

// syncHook.tap('l3', (name) => {
//   console.log(name, 'l3')
// })

syncHook.call('syncHookArg', 'syncHookArg1')


// SyncHook 只能使用tap注册钩子，推荐使用call调用钩子，钩子上的插件，按注册的先后顺序执行
// 调用hook时候传入的参数需要和创建hook实例的时候传入数量保持一致， 否则多出来的参数获取不到

// 也可以使用callAsync和promise进行调用，执行完成之后，分别执行回调函数和返回一个promise对象

// 使用callAsync调用的时候，必须保证传入的参数和钩子实例化时候的一致
// syncHook.callAsync('callAsync1', 'callAsync2', () => {
//   console.log('callAsync 调用')
// })

// syncHook.promise('promsie1', 'promise2').then((data) => {
//   console.log(data)
// })