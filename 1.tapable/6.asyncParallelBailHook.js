const { AsyncParallelBailHook } = require("tapable");

const hook = new AsyncParallelBailHook();

/*

hook.tap('plugin1', () => {
  setTimeout(() => {
    console.log('plugin1');
  },300)
})

hook.tap('plugin2', () => {
  setTimeout(() => {
    console.log('plugin2')
    return 1
  }, 200)
})

hook.callAsync(() => {
  console.log('callAsync触发')
})

hook.promise().then(() => {
  console.log('promise触发')
})

// 初始化完成之后就会触发callAsync和promise.then() 中的回调函数

*/

const hook2 = new AsyncParallelBailHook();

hook2.tapAsync('plugin1',(cb) => {
  setTimeout(() => {
    console.log('plugin1')
    cb();
  }, 200)
})

hook2.tapAsync('plugin2', (cb) => {
  setTimeout(() => {
    console.log('plugin2')
    cb();
  }, 500)
  
})

hook2.tapAsync('plugin3', (cb) => {
  setTimeout(() => {
    console.log('plugin3')
    cb();
  
  }, 1000) 
})

hook2.callAsync(() => {
  console.log('callAsync 触发')
})



// 返回值只要不是undefined就会停止后面插件的执行