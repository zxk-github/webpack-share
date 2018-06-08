const { AsyncParallelBailHook } = require("tapable");

const hook = new AsyncParallelBailHook();

/*

hook.tap('plugin1', () => {
  console.log("plugin1")
})

hook.tap('plugin2', () => {
  console.log('plugin2')
  return 1;
})

hook.tap('plugin3', () => {
  console.log('plugin3')
})

hook.callAsync(() => {
  console.log('callAsync触发')
})

hook.promise().then(() => {
  console.log('promise触发')
})

// 和syncBailHook实例的钩子一样，当钩子返回值不是undefined的时候，会停止后面插件的执行，执行callAsync和promise.then()中的回调函数

*/

const hook2 = new AsyncParallelBailHook();

/* 

hook2.tapAsync('plugin1',(cb) => {
  setTimeout(() => {
    console.log('plugin1')
    cb();
  }, 200)
})

hook2.tapAsync('plugin2', (cb) => {
  setTimeout(() => {
    console.log('plugin2')
    return 1
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

// 只会让回调函数不执行，下一个插件依然会执行

*/

const hook3 = new AsyncParallelBailHook();

hook3.tapPromise('plugin1', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("plugin1")
      resolve(1)
    }, 100);
  })
})

hook3.tapPromise('plugin2', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("plugin2")
      resolve(2)
    }, 300);
  })
})

hook3.tapPromise('plugin3', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("plugin3")
      resolve(3)
    }, 600);
  })
})


hook3.promise().then((data) => {
  console.log(data)
}, (data) => {
  console.log(data)
})