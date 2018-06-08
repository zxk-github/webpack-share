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



