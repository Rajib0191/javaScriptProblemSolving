function getDigit(num, position) {
  return Math.floor(Math.abs(num / Math.pow(10, position)) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(nums) {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(nums[i]));
  }
  return maxDigit;
}

function RadixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }
    // console.log("Bucket:", digitBuckets);
    nums = [].concat(...digitBuckets);
    // console.log("Nums:", nums);
  }
  return nums;
}

// console.log(digitCount(345));
// console.log(getDigit(345, 0));
// console.log(mostDigits([23, 345, 5467, 12, 2345, 9852]));
console.log(RadixSort([23, 345, 5467, 12, 2345, 9852]));
