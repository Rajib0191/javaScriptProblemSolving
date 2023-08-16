// 88. Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let pointer = m + n - 1;
  while (second >= 0) {
    if (nums1[first] > nums2[second]) {
      nums1[pointer] = nums1[first];
      pointer--;
      first--;
    } else {
      nums1[pointer] = nums2[second];
      pointer--;
      second--;
    }
  }
  return nums1;
};
console.log(merge([2, 5, 6], 3, [1, 2, 3, 0, 0, 0], 3));
