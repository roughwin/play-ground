
const os = require('os');


function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  })
}

function time() {
  return new Date().getTime()
}

async function atom(runMs, total) {
  if (runMs > 0) {
    const startT = time();
    while (true) {
      if ((time() - startT) > runMs) {
        break;
      }
    }
  }
  await sleep(total - runMs);
}

let lastT = time();
const PERIOD = 100;

const calcRunMs = (function() {
  let lastUsage = 0;
  let initValue = 0;
  return function(PERIOD, target) {
    const { user, system } = process.cpuUsage();
    const current = (user - lastUsage) / (1000 * PERIOD );
    lastUsage = user;
    const diff = current - target;
    console.log(diff.toFixed(2), target.toFixed(2), current, initValue);
    return PERIOD * (Math.sin((initValue++) / 10) + 1) / 2
    // if (diff < 0 && initValue < PERIOD) {
    //   ++initValue
    // } else if (initValue - 1 > 0) {
    //   --initValue;
    // }
    // return initValue;
  }
})()

async function run() {
  let counter = 0;
  while (true) {
    const target = (Math.sin((counter++) / 10) + 1) / 2;
    const runms = calcRunMs(PERIOD, target)
    await atom(runms, PERIOD)
  }
}

run()