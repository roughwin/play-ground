const A = Array(100).fill(0).map(x => {
  return Math.ceil((Math.random() - 0.5) * 1000)
});

const B = [1, 2, 3, 3, 1]

function name(arr) {
  let max = 0;
  for(let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const temp = arr[i] + arr[j] + Math.abs(i -j);
      if (temp > max) {
        max = temp;
      }
    }
  }
  return max;
}

function fun(arr) {
  let l = 0, r = arr.length - 1;
  let max = 0;
  
}




console.log(name(B), fun(B));