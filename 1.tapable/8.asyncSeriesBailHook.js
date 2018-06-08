const { AsyncSeriesBailHook } =require('tapable');

const hook1 = new AsyncSeriesBailHook();
/*
console.time('cost')
hook1.tap('plugin1', () => {
  setTimeout(() => {
    console.log('plugin1')
  }, 200)
})

hook1.tap('plugin2', () => {
  setTimeout(() => {
    return 1;
    console.log('plugin2')
    
  }, 300)
})

hook1.tap('plugin3', () => {
  setTimeout(() => {
    console.timeEnd('cost')
    console.log('plugin3')
  }, 500)
})

hook1.callAsync(() => {
  console.log('callAsync 触发')
})

*/

const hook2 = new AsyncSeriesBailHook();

/*
console.time('cost');
hook2.tapAsync('plugin1', (cb) => {
  setTimeout(() => {
    console.log('plugin1')
    cb()
  }, 200)
})

hook2.tapAsync('plugin2', (cb) => {
  setTimeout(() => {
    console.log('plugin2')
    cb(undefined)
  }, 300)
})

hook2.tapAsync('plugin3', (cb) => {
  setTimeout(() => {
    console.log('plugin3')
    cb()
  }, 500)
})

// hook2.callAsync(() => {
//   console.timeEnd('cost')
//   console.log('callAsync 触发')
// })
// 当插件回调函数参数不为undefined时候，会结束下面插件执行，调用callAsync的回调函数

hook2.promise().then(() => {
  console.timeEnd('cost')
  console.log("promise 触发")
  console.log('resolve')
}, () => {
  console.log('reject')
})

// cb() 回调是undefined时候，执行rsolve, 不是undefined时候，终止插件执行，执行reject

*/

const hook3 = new AsyncSeriesBailHook();

hook3.tapPromise('plugin1', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('plugin1')
      resolve()
    }, 200) 
  })
}) 

hook3.tapPromise('plugin2', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('plugin2')
      reject()
    }, 300) 
  })
}) 

hook3.tapPromise('plugin3', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('plugin3')
      resolve()
    }, 500) 
  })
}) 

hook3.promise().then((data) => {
  console.log('resolve', data)
}, (data) => {
  console.log('reject', data)
})

// reject就不会执行下一个插件，并且被执行reject函数, 无论参数是什么




