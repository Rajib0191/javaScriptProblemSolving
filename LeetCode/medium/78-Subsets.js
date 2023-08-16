// 78. Subsets -->(100%)
var subsetsFunc = function (nums) {
  if (nums.length === 0) return [];

  let subsets = [];
  subsets.push([], [nums[0]]);

  for (let i = 1; i < nums.length; i++) {
    let currentLength = subsets.length;
    for (let j = 0; j < currentLength; j++) {
      subsets.push([...subsets[j], nums[i]]);
    }
  }
  return subsets;
};
console.log(subsetsFunc([1, 5, 3]));
// let arr = [[], [1]];
// console.log([...arr[0], 5]);
// console.log(arr.length);
