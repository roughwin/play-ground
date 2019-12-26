const spawn = require("child_process").spawn

const args = process.argv.slice(2)
const git = spawn('git', args)

// console.log(process.stdin)
// process.stdin.on('data', d => {
//   console.log('stdin', d.toString('utf8'))
// })
console.log(args)
git.stdout.on('data', (d) => {
  console.log('standard output: \n' + d)
})

git.stderr.on('data', (d) => {
  console.log('standard error output: \n' + d)
})

git .on('exit', (code, signal) => {
  console.log('exit', code)
})
