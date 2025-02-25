//=====Approach-01:Using Two Pointer=====
var twoSum = function (nums, target) {
  const length = nums.length;
  let firstIndex = 0;
  let lastIndex = firstIndex + 1;
  while (firstIndex < length - 1) {
    if (nums[firstIndex] + nums[lastIndex] === target) {
      return [firstIndex, lastIndex];
    } else if (lastIndex === length - 1) {
      firstIndex++;
      lastIndex = firstIndex + 1;
    } else {
      lastIndex++;
    }
  }
};

//=====Approach-02:Using HashMap=====
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let searchValue = target - nums[i];
    if (map.has(searchValue)) {
      return [map.get(searchValue), i];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
};

console.log(twoSum([2, 7, 11, 15], 9));
