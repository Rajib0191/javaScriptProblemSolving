// 26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  let len = nums.length;
  let last = NaN;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== last) {
      nums[count] = nums[i];
      last = nums[i];
      console.log(last);
      count++;
    }
  }
  return count;
};
console.log(removeDuplicates([1, 1, 2]));
