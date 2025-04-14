var search = function (nums, target) {
  let left = 0;
  let right = nums?.length - 1;

  while (left <= right) {
    console.log("LEFT:", left, "RIGHT:", right);

    let mid = Math.floor((left + right) / 2);
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

const nums = [1, 3];
let target = 1;
console.log(search(nums, target));
