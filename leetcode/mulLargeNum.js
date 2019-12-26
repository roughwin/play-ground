function addTwoNum(arr, brr) {
  let maxLen = brr.length
  if (arr.length > brr.length) {
    maxLen = arr.length
  }
  let result = []
  let up = 0;
  for (let i = 0; i < maxLen || up; i++) {
    const a = arr[i] || 0
    const b = brr[i] || 0
    let sum = a + b + up;
    if (sum >= 10) {
      up = 1
      sum = sum % 10
    } else {
        up = 0
    }
    result.push(sum)
  }
  return result
};
var multiply = function(num1, num2) {
  if (num1 == '0' || num2 == '0') return '0'
  const arrA = num1.split('').reverse().map(o => +o);
  const arrB = num2.split('').reverse().map(o => +o);
  let list = {}
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      const mull = arrA[i] * arrB[j]
      const zeros = i + j;
      if (isNaN(list[zeros])) list[zeros] = 0
      list[zeros] += mull
    }
  }
  let sum = [0]
  for (const zeros in list) {
    const mul = String(list[zeros]).split('').reverse().map(o => +o)
    sum = sum.slice(0, zeros).concat(addTwoNum(sum.slice(zeros), mul))
  }
  return sum.reverse().join('')
};

let num0 = ''
for (let i = 0; i < 100; i++) {
  num0 += Math.random().toString().slice(2);
}
console.log('num -------->', num0)
console.log('num * num -->', multiply(num0, num0))
