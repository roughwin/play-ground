const demoHost = 'abc.aaa.com:123';

const test = '*.abc.com';


function valid(x) {
  return (!!x)
}

const T = {};

function setV(h, v) {
  const arr = h.split('.');
  const obj = T;
  let lastp, lastx;
  let cursor = obj;
  while (arr.length) {
    const x = arr.pop()
    lastp = cursor;
    lastx = x;
    if (valid(x)) {
      if (cursor[x] === undefined) {
        cursor[x] = {}
      }
      cursor = cursor[x]
    } else {
      break
    }
  };
  cursor['.'] = v;
  // cursor['.'] = ++incrKey;
  // VMap.set(incrKey, v)
  return T;
}

setV(demoHost, '123')
setV(test, 'haha')

function match(tree = T, h) {
  const arr = h.split('.');
  let cursor = T;
  while(arr.length) {
    const x = arr.pop();
    if (!valid(x)) {
      return
    }
    if (arr.length === 0) {
      if (cursor[x]) {
        return cursor[x]['.']
      }
      if (cursor['*']) {
        return cursor['*']['.']
      }
    }
    if (cursor[x]) {
      cursor = cursor[x]
    }
  }
}

console.log(JSON.stringify(T, ' ', 2))

console.log(match(T, 'b.a.abc.com'))
console.log(match(T, 'abc.aaa.com:123'))

// console.log(
//   deal(demoHost, '123')
//   ,
//   deal(test, '111')
// )