/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let s = str.trim().replace('e', 'x')
  let max = ''
  let len = s.length;
  for (let i = 0; i < len + 1; i++) {
      t = s.slice(0, i)
      if (!isNaN(t) && t.length > max.length) {
          max = t
      }
  }
  const result = +max
  if (result > 2147483647)
    return 2147483647
  if (result < -2147483648)
    return -2147483648
  return result
};

console.log(myAtoi("   -115579378e25"))