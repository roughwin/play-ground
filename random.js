
let rrr;

function test() {
  const a = {
    range: [1, 25],
    get: 0,
  };
  const b = {
    range: [26, 50],
    get: 0,
  };
  const c = {
    range: [51, 100],
    get: 0,
  };
  const rule = [a, b, c];
  let stack = [];
  function genNum() {
    let num = Math.ceil(Math.random() * 100);
    if (rrr) {
      while (num === undefined || stack.includes(num)) {
        num = Math.ceil(Math.random() * 100);
      }
    }
    return num;
  }
  
  function inRange(r, num) {
    const [min, max] = r;
    if (num >= min && num <= max) {
      return true;
    }
    return false;
  }
  for (let j = 0; j < 100000; j++) {
    const len = Math.ceil(Math.random() * 100);
    stack = [];
    for (let i = 0; i < len; i++) {
      const x = genNum();
      for (const r of rule) {
        if (inRange(r.range, x)) {
          stack.push(x);
          r.get++;
        }
      }
    }
  }
  const result = rule.map(x => x.get);
  const sum = result.reduce((s, cur) => (s + cur), 0)
  console.log(result.map(x => x/sum), rrr);
}


rrr = false;
test();
rrr = true;
test();
