var maxOperations = function (nums, k) {
  nums.sort();
  let result = 0;
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[start] + nums[end] > k) end--;
    else if (nums[start] + nums[end] < k) start++;
    else {
      start++;
      end--;
      result++;
    }
  }
  return result;
};
console.log(maxOperations([3, 1, 3, 4, 3], 6));
