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
function genNum() {
  let num;
  num = Math.ceil(Math.random() * 100);
  return num;
}

function inRange(r, num) {
  const [min, max] = r;
  if (num >= min && num <= max) {
    return true;
  }
  return false;
}


for (let i = 0; i < 100000; i++) {
  const x = genNum();
  for (const r of rule) {
    if (inRange(r.range, x)) {
      // stack.push(x);
      r.get++;
    }
  }
}

console.log(rule.map(x => x.get))