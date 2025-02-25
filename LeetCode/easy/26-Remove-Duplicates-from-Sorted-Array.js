// =====Approach-01=====
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let a = 0;
  let b = 1;

  while (b < nums.length) {
    if (nums[a] === nums[b]) {
      b++;
    } else {
      a++;
      nums[a] = nums[b];
    }
  }

  return a + 1;
};

// =====Approach-02=====
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
console.log(removeDuplicates([1, 1, 2]));
