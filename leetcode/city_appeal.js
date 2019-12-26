

const B = [1, 2, 3, 3, 1]

function name(arr) {
  let max;
  for(let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const temp = arr[i] + arr[j] + Math.abs(i -j);
      if (temp > max || max === undefined) {
        max = temp;
      }
    }
  }
  return max;
}

function fun(arr) {
  const len = arr.length;
  let maxA, maxB;
  for(let i = 0; i < len; i++) {
    const tempA = arr[i] - i;
    const tempB = arr[i] + i;
    if(tempA > maxA || maxA === undefined) {
      maxA = tempA;
    }
    if(tempB > maxB || maxB === undefined) {
      maxB = tempB;
    }
  }
  return maxA + maxB;
}

setInterval(() => {
  const A = Array(100).fill(0).map(x => {
    return Math.ceil((Math.random() - 1) * 1000)
  });
  console.log(name(A), fun(A));
}, 200);