const {
  Observable,
  Subject,
  AsyncSubject,
  ReplaySubject,
  interval,
  from,
  of,
  range
} = require('rxjs');
const { map, filter, concatMap, concat, take, throttle, delay, flatMap} = require('rxjs/operators');

const s = interval(100).pipe(
  filter(x => x > 1),
  map(x => `${x} !!!`),
  take(5)
)
const r = of(4, 2).pipe(
  map(x => x * 2),
  concatMap(x => of(x).pipe(delay(1000)))
);

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
