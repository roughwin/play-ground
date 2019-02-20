function fun() {
  console.log('this.a', this.a);
}

const x = {
  a: 'x a'
}

global.a = 'global a'
const funx = fun.bind(x);

funx();
fun();

const y = {
  f: funx,
  a: 'y a'
}

y.f()