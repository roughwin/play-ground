var isMatch = function(s, p) {
  const ss = s.split('');
  const pp = p.split('');
  while(pp.length && !matchOne(ss, pp)) {
    console.log(pp)
    pp.shift();
  }
  return !!pp.length
};

function matchOne(ss, pp) {
  const max = ss.length;
  let cur = 0;
  let lastppp;
  for (let i = 0; i < pp.length; i++) {
      const ppp = pp[i];
      while (ppp === '*' && cur < max && checkOne(ss[cur], lastppp)) {
        cur++
      }
      if (cur < max && !checkOne(ss[cur], ppp)) {
          return false;
      }
      cur++
      lastppp = ppp;
  }
  if (cur >= max) {
    return true;
  }
  return false
}

function checkOne(sss, ppp) {
  if (ppp === '.' || ppp === sss) {
      return true;
  }
  return false
}

console.log(isMatch('aab', 'c*a*b'))