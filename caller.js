function a() {
  console.log(a.caller, a.caller.arguments);
}

function run() {
  a(123);
  console.log('running')
}

run('haha')