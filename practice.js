var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  console.log("Left:", left);
  console.log("Right:", right);

  while (left <= right) {
    let mid = Math.floor(left + right) / 2;
    console.log("MID:", mid);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] >= nums[left]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[right] >= target && target >= nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2];
let target = 1;
console.log(search(nums, target));
