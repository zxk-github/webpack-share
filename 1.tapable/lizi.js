const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,

  AsyncParallelHook,
  AsyncParallelBailHook,

  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook

 } = require('tapable');

class Car {
  constructor() {
    this.hooks = {  //声明钩子
      accelerate: new SyncHook(["newSpeed"]),
      break: new SyncHook(),
      calculateRoutes: new AsyncParallelHook(["source", "target", "routesList"])
    }
  }
}


const myCar = new Car();

// sync* 类型的钩子只能通过tap方法在钩子下面添加插件
myCar.hooks.break.tap("WarningLampPlugin", () => {
  console.log(1)
})

myCar.hooks.accelerate.tap("LoggerPlugin", newSpeed => {
  console.log(`Accelerating to ${newSpeed}`)
})


// async* 类型的钩子可以使用tapPromise tapAsync注册异步插件，也可以使用tap注册同步插件
myCar.hooks.calculateRoutes.tapPromise("promisePlugin", () => {
  return Promise.resolve("111")
})

myCar.hooks.calculateRoutes.tapAsync("asyncPlugin", (callBack) => {
  callBack();
})

myCar.hooks.calculateRoutes.tap("syncPlugin", () => {
  console.log(111);
})


// 通过钩子的call promise callAsync方法，按照一定规则调用执行钩子下注册的插件








