var Observable = require('rxjs/Observable').Observable;
// 使用适合的方法在 Observable 上打补丁
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');
require('rxjs/add/operator/filter');

var s = Observable.of(1,2,3).filter(x => x > 1).map(function (x) { return x + '!!!'; }); // 等等



s.subscribe(console.log)