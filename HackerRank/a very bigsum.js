function aVeryBigSum(ar) {
  let sum = ar.reduce((sum, val) => sum + val, 0);
  return sum;
}

console.log(aVeryBigSum([17, 28, 30])); // Output: [1, 1]
