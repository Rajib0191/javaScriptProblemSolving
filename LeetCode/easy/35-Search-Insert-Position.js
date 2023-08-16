//35. Search Insert Position
var searchInsert = function (nums, target) {
  console.log(nums, target);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};
console.log(searchInsert([1, 3, 5, 6], 5));
//======Another Way======Add the target value that position
let find = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      let temp = nums[i];
      nums[i] = target;
      nums.push(temp);
      console.log(nums);
      return i;
    }
  }
};
console.log(find([1, 3, 5, 6, 7, 10], 8));

// =====Another Way=======
var maxSubArray = function (nums) {
  let max = nums[0]; //-2,1,1,4,4,5,6,6,6
  let currentSum = nums[0]; //-2,1,-2,4,3,5,6,1,5
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    max = Math.max(max, currentSum);
  }
  return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
