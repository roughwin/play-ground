/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length;
  let max = ''
  for (let i = 0; i < len; i++) {
    const [x1, x2] = checkPalindrome(s, i, i)
    const [y1, y2] = checkPalindrome(s, i, i + 1)

    let tmp = ''
    if ((x2 - x1) > (y2 - y1)) {
      // console.log('x -->', s.slice(x1, x2), x1, x2, i)
      tmp = s.slice(x1, x2)
    } else {
      // console.log('y -->', s.slice(y1, y2), y1, y2, i)
      tmp = s.slice(y1, y2)
    }
    if (tmp.length > max.length) {
      max = tmp
    }
  }
  return max
};
function checkPalindrome(s, m, n) {
  const len = s.length;
  let i;
  for (i = 0; (n + i < len) && (m - i >= 0); i++) {
    if (s.charAt(n + i) !== s.charAt(m - i)) {
      break
    }
  }
  return [m - i + 1, n + i];
}
function max(a, b) {
  return a > b ? a : b;
}

console.log(longestPalindrome("cbbbbc"))