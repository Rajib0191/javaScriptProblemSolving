function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
  // let total = ar.reduce((acc, val) => acc + val, 0);
  // return total;
}

console.log(simpleArraySum([1, 3, 2]));
