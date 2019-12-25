const moment = require('moment');
const specialDays = {};
moment.locale('zh-cn')

function checkNormal(dateStr) {
  const time = moment(dateStr);
  const dayOfWeek = time.day();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return false;
  }
  return true;
}

function checkHoliday(dateStr) {
  return specialDays[dateStr];
}

function check(dateStr) {
  const specialResult = checkHoliday(dateStr);
  if (specialResult === undefined) {
    return checkNormal(dateStr);
  }
  return !checkNormal(dateStr);
}

const specialList = [
  '20200101',
  '20200119',
  '20200124',
  '20200127',
  '20200128',
  '20200129',
  '20200130',
  '20200201',
  '20200406',
  '20200426',
  '20200501',
  '20200504',
  '20200505',
  '20200509',
  '20200625',
  '20200626',
  '20200628',
  '20200927',
  '20201001',
  '20201002',
  '20201005',
  '20201006',
  '20201007',
  '20201008',
  '20201010',
]

const o = specialList.reduce((a, b) => {
  return {
    ...a,
    [b]: 1
  }
}, {})

console.log(JSON.stringify(o))
check()