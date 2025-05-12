function miniMaxSum(arr) {
  const totalSum = arr.reduce((acc, val) => acc + val, 0);

  const min = totalSum - Math.max(...arr);
  const max = totalSum - Math.min(...arr);

  console.log(`${min} ${max}`);
}

miniMaxSum([1, 2, 3, 4, 5]); // Output: 10 14
