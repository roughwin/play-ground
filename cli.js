const spawn = require("child_process").spawn

function cli(cmd, ...args) {
  const xxx = spawn(cmd, args);
  return new Promise(function (resolve, reject) {
    let result = '';
    xxx.stdout.on('data', (d) => {
      result += d;
    });
    xxx.stderr.on('data', (d) => {
      reject('standard error output: \n' + d)
    });
    xxx.on('exit', (code, signal) => {
      resolve(result)
    });
  });
}


!(async function () {
  const a = await cli('echo', ['status']);
  console.log(a)
})()

