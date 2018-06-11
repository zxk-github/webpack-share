const { AsyncSeriesWaterfallHook } = require('tapable');

const hook = new AsyncSeriesWaterfallHook(['name']);
/*
hook.tap('plugin1', (data) => {
  console.log('plugin1');
  return 1;
})

hook.tap('plugin2', (data) => {
  console.log('plugin2', data);
  return 2;
})

// hook.callAsync('webpack', data => {
//   console.log(data)
// });
hook.promise().then((data) => {
  console.log('promise 触发', data)
})

// 使用AsyncSeriesWaterfallHook 在初始化时候，必须传入参数
// 上一个插件的返回结果，会做为下一个插件的参数使用
*/

/*

const hook2 = new AsyncSeriesWaterfallHook(['name']);

hook2.tapAsync('plugin1', (data, cb) => {
  setTimeout(() => {
    console.log('plugin1', data);
    cb(null, 1);
  }, 200)
})


hook2.tapAsync('plugin2', (data, cb) => {
  setTimeout(() => {
    console.log('plugin2', data);
    cb(null, 2);
  }, 300)
})

hook2.tapAsync('plugin3', (data, cb) => {
  setTimeout(() => {
    console.log('plugin3', data);
    cb(null, 3);
  }, 300)
})

// hook2.callAsync('hook2',(data) => {
//   console.log('callAsync触发', data)
// })  

hook2.promise().then((data) => {
  console.log("promise触发", data)
})

//  使用promise触发，可以拿到最后一个插件，callback的值, callAsync则拿不到

*/

const hook3 = new AsyncSeriesWaterfallHook(['name']);

hook3.tapPromise('plugin1', (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('plugin1', data)
      resolve(1)
    }, 200)
  })
})

hook3.tapPromise('plugin2', (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('plugin2', data)
      resolve(2)
    }, 300)
  })
})

hook3.tapPromise('plugin3', (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('plugin3', data)
      resolve(3)
    }, 300)
  })
})

// hook3.promise('hook3').then((data) => {
//   console.log('promise', data)
// }, (err) => {
//   console.log(err)
// })

hook3.callAsync('hook3', (data) => {
  console.log('callAsync触发', data)
})
