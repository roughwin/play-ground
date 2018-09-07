function bezier(n, t) {
  let sum = 0
  for (let k = 0; k < n; k++) {
    sum += mul(n) / (mul(k) * mul(n - k)) * (1 - t)**(n - k) * (t ** k)
  }
  return sum
}

function mul(num) {
  if (num > 0) {
    return mul(num - 1) * num;
  }
  return 1;
}
console.log(mul(2))
console.log(bezier(2, 0.3))