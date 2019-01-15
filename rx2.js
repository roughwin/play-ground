const {
  Observable,
  Subject,
  AsyncSubject,
  ReplaySubject,
  interval,
  from,
  Subscription,
  of,
  range
} = require('rxjs');
const {
  map, filter, concatMap, concat,
  take, throttle, delay, flatMap,
  switchMap, mergeAll
} = require('rxjs/operators');

const a = from('abcdefghijk'.split(''))

const b = from('abcdefghijg'.toUpperCase().split(''))

const source = interval(500);
const S = new Subscription();

const x = source.subscribe(console.log);

S.add(x);


setTimeout(() => {
  S.unsubscribe();
}, 1000);



