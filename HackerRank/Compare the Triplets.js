function compareTriplets(a, b) {
  let aP = 0;
  let bP = 0;
  let i = 0;
  let j = 0;

  while (i < a.length) {
    if (a[i] > b[j]) {
      aP += 1;
    } else if (a[i] < b[j]) {
      bP += 1;
    }
    i++;
    j++;
  }

  return [aP, bP];
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8])); // Output: [1, 1]
