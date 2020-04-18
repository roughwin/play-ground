const DAY_SECONDS = 60 * 60 * 24;
const DAY_MILLISECONDS = DAY_SECONDS * 1000;

/**
 * 当前时区偏移的分钟数（相对伦敦时）
 * @param date
 */
function tzOffsetMilliseconds(date: Date) {
  const tzOffsetMinutes = date.getTimezoneOffset();
  return tzOffsetMinutes * 60 * 1000;
}

/**
 * 某天的开始时刻
 * @param anyDate
 */
export function getDateStart(anyDate: Date) {
  const int = Math.floor(anyDate.getTime() / DAY_MILLISECONDS)
  const dayStart = new Date(int * DAY_MILLISECONDS + tzOffsetMilliseconds(anyDate));
  return dayStart;
}

/**
 * 某月的开始时刻
 * @param anyDate
 */
export function getMonthStart(anyDate: Date) {
  const newDay = Date.UTC(anyDate.getUTCFullYear(), anyDate.getUTCMonth(), 1);
  return new Date(newDay + tzOffsetMilliseconds(anyDate));
}

/**
 * 某周的开始时刻
 * @param anyDate
 * @param weekStartDay 
 */
export function getWeekStart(anyDate: Date, weekStartDay: (0 | 1) = 0) {
  const dayInWeek = anyDate.getUTCDay();
  const daystart = getDateStart(anyDate);
  const newDay = new Date(daystart.getTime() - (dayInWeek - weekStartDay) * DAY_MILLISECONDS);
  return newDay;
}

/**
 * 
 * @param date 一天的第多少秒
 */
export function dateToShift(date: Date) {
  const daystart = getDateStart(date).getTime();
  const offset = date.getTime() - daystart;
  return Math.floor(offset / 1000);
}

type shift = [number, number];

export function flat(arr: any[]) {
  return arr.reduce((sum, cur) => {
    if (Array.isArray(cur)) {
      return [...sum, ...flat(cur)];
    }
    return [...sum, cur]
  }, [])
}

/**
 * 压缩数据
 * @param arr
 */
export function compressShifts(arr: shift[]) {
  arr.sort(function(a: shift, b: shift) {
    return a[0] - b[0]
  });
  const newArr = arr.map((v, index) => {
    const [a] = v;
    return a;
  });
  newArr.push(arr[arr.length - 1][1]);
  if (newArr[newArr.length - 1] - newArr[0] > (DAY_MILLISECONDS + 10)) {
    throw new Error('total range > 24h')
  }
  return newArr
}


/**
 * 解压缩数据
 * @param arr 
 */
export function recoverShifts(arr: number[]) : shift[] {
  let result: shift[] = [];
  for (let i = 0; i < arr.length - 1; i += 1) {
    result.push([arr[i], arr[i + 1]])
  }
  return result
}

// const compressData = compressShifts([[400, 500], [200, 300], [300, 400]]);
// console.log(compressData)
// console.log(recoverShifts(compressData));

/**
 * 获取某天是一个循环的第几天
 * @param loopLen 循环的周期（天）
 * @param date 任意时间
 */
export function getLoopIndex(loopLen: number, date: Date) {
  const cur = date.getTime();
  const zero = new Date(0).getTime() + tzOffsetMilliseconds(date);
  const offsetDays = Math.floor((cur - zero) / DAY_MILLISECONDS);
  const index = offsetDays % loopLen;
  return index;
}

console.log(getLoopIndex(5, new Date('2020-03-08')))

/**
 * 获取一个循环的开始时间
 * @param length 循环的周期（天）
 * @param center 任意时间
 */
export function getRangeStart(length: number, center: Date) {
  const middleNum = Math.floor((length + 1) / 2); // start from 1
  const startDay = getDateStart(center).getTime() - ((middleNum - 1) * DAY_MILLISECONDS);
  return new Date(startDay);
}

console.log(getRangeStart(4, new Date()));

