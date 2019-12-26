/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const gLen = nums1.length + nums2.length;
  const aMax = nums1[nums1.length - 1], aMin = nums1[0],
  bMax = nums2[nums2.length - 1], bMin = nums2[0];
  let aPos = 0, bPos = nums2.length - 1;
  switch (true) {
    case aMax <= bMin:
      
      break;
    case aMin <= bMin && aMax >= bMin:
      for (aPos = nums1.length - 1; nums1[aPos] > bMin; aPos--) {}
      for (bPos = 0; nums2[bPos] < aMax; bPos++ ) {}
      const midArr = nums1.slice(aPos).concat(nums2.slice(0, bPos)).sort((a, b) => a - b)
      
      break;
    case aMin > bMax:
      break;
    default:
      break;
  }
};

function max(a, b) {
  if (a > b) return a;
  return b;
}