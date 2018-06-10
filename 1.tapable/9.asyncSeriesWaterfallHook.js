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

hook.callAsync('webpack', data => {
  console.log(data)
});

// 上一个插件的返回结果，会做为下一个插件的参数使用

*/


const queue2 =new AsyncSeriesWaterfallHook();

console.time('cost2');
queue2.tapAsync('1', function (name, callback) {
    setTimeout(function () {
        console.log('1: ', name);
        callback(null, 2);
    }, 100)
});
queue2.tapAsync('2', function (data, callback) {
    setTimeout(function () {
        console.log('2: ', data);
        callback(null, 3);
    }, 200)
});
queue2.tapAsync('3', function (data, callback) {
    setTimeout(function () {
        console.log('3: ', data);
        callback(null, 3);
    }, 300)
});
queue2.callAsync('webpack', err => {
    console.log(err);
    console.log('over');
    console.timeEnd('cost2');
});

// hook1.tapAsync('plugin1', (cb) => {
//   setTimeout(() => {
//     cb(1)
//     console.log('plugin1');
//   }, 100)
// })

// hook1.tapAsync('plugin2', (cb) => {
//   setTimeout(() => {
//     cb(2);
//     console.log('plugin2');
//   }, 200)
// })

// hook1.tapAsync('plugin3', (cb) => {
//   setTimeout(() => {
//     cb(3)
//     console.log('plugin3');
//   }, 300)
// })

// hook1.callAsync( (data) => {
//   console.log('callAsync 触发', data)
// })


