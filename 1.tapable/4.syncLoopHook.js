const { SyncLoopHook } = require('tapable');

const loopHook = new SyncLoopHook(['loopHook1', 'loopHook2']);

let data = 3;

loopHook.tap('plugin1', () => {
  console.log("plugin1 data:", data);
  data --;
  if(data > 1) {
    return true;
  }
  // return data
  return undefined;
})


loopHook.tap('plugin2', (name) => {
  console.log(name)
})

// loopHook.call('loopHook1')


// 当插件返回true的时候，插件会被反复执行，返回undefined, 会跳出插件，执行下一插件

// 使用callAsync和promise调用插件

// loopHook.callAsync('callAsync', 'callAsync2', () => {
//   console.log('callAsync方式调用')
// })


// loopHook.promise('promise').then(() => {
//   console.log('promise方式调用')
// })
