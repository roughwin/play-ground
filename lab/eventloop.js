
let a = 0;

setImmediate(() => {
  console.log(1, a);
})

async function fn() {
  a += await 10;
  console.log(2, a);
  a += await 10;
  console.log(3, a);
}

fn();

a++
console.log(4, a);