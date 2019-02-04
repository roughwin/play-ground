const {
  Observable,
  Subject,
  AsyncSubject,
  ReplaySubject,
  interval,
  from,
  of,
  range,
} = require('rxjs');
const {
  map, filter,
  concatMap, concat,
  take, throttle,
  delay, flatMap,
  retry, catchError,
  tap, retryWhen,
  repeatWhen, repeat,
  delayWhen,
} = require('rxjs/operators');

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
    console.log('sleeping', ms)
  });
}
let f = 0;
function mockreq(x) {
  return new Promise(function(resolve, reject) {
    if (x == 3) {
      console.log('f ---->', f)
      if (++f > 1) {
        resolve(x);
      }
      setTimeout(() => {
        reject('hello error');
      }, 500);
    } else {
      resolve(x);
    }
  })
}

function mockfetch(x) {
  return of(x).pipe(
    map(mockreq),
    flatMap(a => a),
    tap(console.log),
    retry(3)
  ).toPromise();
}

!(async function x() {
  const a = interval(300).pipe(
    // take(5),
    flatMap(mockfetch),
    // tap(console.log)
  )
  await a.toPromise();
})()


// s.pipe(
//   concat(r)
// ).subscribe(console.log)

const delayedRange = range(0, 5).pipe(delay(1000),)


const mockUrls = from(['a', 'b', 'c']);

const testObserver = mockUrls.pipe(
  map(a => (a + a)),
  concatMap(async (x) => {
    await sleep(1000);
    return x;
  })
);

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

testObserver.subscribe(console.log)
