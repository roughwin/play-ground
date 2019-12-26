/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let arrs = new Array(numRows)
  arrs = arrs.fill(0).map(o => [])
  let max = numRows - 1
  let flag = 1
  if (max < 1) flag = 0
  let i = 0
  s.split('').forEach((c) => {
      arrs[i].push(c)
      i += flag
      if (i >= max || i <= 0) {
          flag = -flag
      }
  })
  return arrs.reduce((r, a) => r.concat(a)).join('')
};


convert('AB', 1)