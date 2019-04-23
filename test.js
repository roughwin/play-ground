
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncTimeout(func, m) {
  const timeoutResult = Symbol('timeoutResult')
  const timeoutP = async () => {
    await sleep(m)
    return timeoutResult
  }
  const promiseArrasy = [func(), timeoutP(m)]
  const result = await Promise.race(promiseArrasy)
  if (result === timeoutResult) {
    console.log('timeout')
    throw new Error('timeout')
  }
  return result
}

const os = require('os');
const netWorks = os.networkInterfaces();
console.log(os.userInfo());
// !(async function name(params) {
//   const a = await asyncTimeout(async () => {
//     await sleep(2000)
//     return 'finish'
//   }, 1000)
//   console.log(a)
// })()