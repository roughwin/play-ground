const spawn = require("child_process").spawn

function cli(cmd, ...args) {
  const s = spawn(cmd, args);
  return new Promise(function (resolve, reject) {
    let result = '';
    s.stdout.on('data', (d) => {
      result += d;
    });
    s.stderr.on('data', (d) => {
      reject(d.toString())
    });
    s.on('exit', (code, signal) => {
      resolve(result)
    });
  });
}


!(async function () {
  const a = await cli('git', ['sdf']);
  console.log(a)
})()

