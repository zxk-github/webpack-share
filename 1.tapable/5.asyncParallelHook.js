const { AsyncParallelHook } = require('tapable');

const parallelHook = new AsyncParallelHook();


parallelHook.tap('tapPlugin1', () => {
  setTimeout(() => {
    console.log('tapPlugin1')
  }, 700)
})

parallelHook.tap('tapPlugin2', () => {
  setTimeout(() => {
    console.log('tapPlugin2')
  }, 500)
})

// parallelHook.tapAsync('tapAsyncPlugin', () => {
//   setTimeout(() => {
//     console.log('tapAsyncPlugin')
//   }, 600)
// })


// 不能使用call() 调用异步钩子
// parallelHook.call() //error

// 使用callAsync, promise 调用tap注册的异步钩子， 插件初始化完成之后就会触发回调函数，并且tap注册钩子不接受回调函数作为参数
parallelHook.callAsync(() => {
  console.log('触发tapPlugin')
})

parallelHook.promise().then(() => {
  console.log("promise 触发")
})


const parallelHook2 = new AsyncParallelHook();

/*

parallelHook2.tapAsync('tapAsyncPLugin1', (cb) => {
  setTimeout(() => {
    console.log("tapAsyncPLugin1")
    cb()
  }, 500)
})

parallelHook2.tap('tapAsyncPLugin2', (cb) => {
  setTimeout(() => {
    console.log("tapAsyncPLugin2")
    cb()
  }, 1000)
})

parallelHook2.callAsync(() => {
  console.log('callAsync 调用')
}) 

parallelHook2.promise().then(() => {
  console.log("promise 调用")
})
// 使用callAsync()，promise() 调用插件，必须在插件中传入回调函数，才能在全部执行完成之后，调用callAsync中的回调函数

*/

const parallelHook3 = new AsyncParallelHook();

/*
parallelHook3.tapPromise("tapPromisePlugin1", () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("tapPromisePlugin1")
      resolve();
    }, 500)
  })
  
})

parallelHook3.tapPromise("tapPromisePlugin2", () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("tapPromisePlugin2")
      resolve();
    }, 700)
  })
});

// tapPromise() 注册插件需要返回一个promise对象

// promise 和 callAsync都可以进行调用
parallelHook3.promise().then(() => {
  console.log('callAsync调用')
})

parallelHook3.callAsync(() => {
  console.log("callAsync调用")
})

*/