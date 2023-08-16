// 581. Shortest Unsorted Continuous Subarray
var findUnsortedSubarray = function (nums) {
  let max = nums[0];
  let min = nums[nums.length - 1];
  let start = -1;
  let end = -2;
  for (let i = 1; i < nums.length; i++) {
    let j = nums.length - i - 1;
    max = Math.max(max, nums[i]);
    if (max > nums[i]) {
      end = i;
    }
    min = Math.min(min, nums[j]);
    if (min < nums[j]) {
      start = j;
    }
  }
  return end - start + 1;
};
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([2, 4, 6]));
