const { AsyncSeriesHook } = require('tapable');

// 无论返回值是什么，都会执行完钩子下所有插件

const hook = new AsyncSeriesHook();
/*
console.time('cost');
hook.tap('plugin1', () => {
  setTimeout(() => {
    console.log('plugin1')
  }, 200)
})

hook.tap('plugin2', () => {
  setTimeout(() => {
    console.log('plugin2')
  }, 300)
})

hook.tap('plugin3', () => {
  setTimeout(() => {
    console.log('plugin3')
    console.timeEnd('cost')
  }, 500)
})

// hook.callAsync(() => {
//   console.log("callAsync 触发")
// })
hook.promise().then(() => {
  console.log("promise 触发")
})

*/
const hook2 = new AsyncSeriesHook();

/*
console.time('cost')
hook2.tapAsync('plugin1', (cb) => {
  setTimeout(() => {
    console.log('plugin1')
    cb()
  }, 200) 
})

hook2.tapAsync('plugin2', (cb) => {
  setTimeout(() => {
    console.log('plugin2')
    cb()
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
//   console.log('callAsync 触发');
// })

hook2.promise().then(() => {
  console.timeEnd('cost');
  console.log('promise 触发')
})

*/

const hook3 = new AsyncSeriesHook();

/*
console.time('cost')
hook3.tapPromise('plugin1', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('plugin1')
      resolve(1);
    }, 200)
  })
})

hook3.tapPromise('plugin2', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('plugin2')
      resolve(2);
    }, 300)
  })
})

hook3.tapPromise('plugin3', () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('plugin3')
      resolve(3);
    }, 500)
  })
})

// hook3.callAsync((data) => {
//   console.log('callAsync 触发', data)
// })

hook3.promise().then((data) => {
  console.timeEnd('cost')
  console.log('promise 触发', data)
})

*/