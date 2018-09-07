/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = [], tmp = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i)
    const indexOfChar = tmp.indexOf(c)
    if (indexOfChar !== -1) {
      if (max.length < tmp.length)
        max = tmp;
      tmp = tmp.slice(indexOfChar + 1);
    }
    tmp.push(c)
  }
  if (max.length < tmp.length) {
    return tmp.length
  }
  return max.length
};

console.log(lengthOfLongestSubstring("ggububgvfk"))

