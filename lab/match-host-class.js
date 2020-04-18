
function valid(x) {
  return (!!x)
}

class M {
  constructor() {
    this.T = {};
  }

  setV(h, v) {
    const arr = h.split('.');
    const obj = this.T;
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
  }

  match(h) {
    const arr = h.split('.');
    let cursor = this.T;
    while (arr.length) {
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
}

const m = new M();

m.setV('aaa.bbb.com', 'hello')
m.setV('*.aaa.com', 'xxx')
m.setV('*.bbb.com', 'hello.com')

console.log(JSON.stringify(m.T, '', 2))

console.log(m.match('a.bbb.com'))
console.log(m.match('aaa.bbb.com'))
console.log(m.match('a.aaa.com'))

module.exports = M;
