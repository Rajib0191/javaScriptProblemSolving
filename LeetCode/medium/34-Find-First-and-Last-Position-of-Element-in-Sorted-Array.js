//34. Find First and Last Position of Element in Sorted Array
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length;
  let res = [];

  while (left <= right) {
    if (nums[left] !== target) {
      left++;
    } else {
      res.push(left);
      break;
    }
  }
  while (right >= 0) {
    if (nums[right] !== target) {
      right--;
    } else {
      res.push(right);
      break;
    }
  }
  if (res.length === 0) {
    return [-1, -1];
  } else {
    return res;
  }
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
