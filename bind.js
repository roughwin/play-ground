function x(...args) {
  console.log(arguments, args);
}

const y = x.bind(this, 'abc')

y('hello')