const carlo = require('carlo');

!(async function() {
  console.log('hello');
  console.log(__dirname)
  const app = await carlo.launch();
  await app.serveFolder(__dirname);
  console.log('x')
  await app.exposeObject('obj', {a: 'dff'})
  await app.load('./example.html')
  console.log('y')
})()