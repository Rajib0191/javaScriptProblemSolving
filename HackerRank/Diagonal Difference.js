function diagonalDifference(arr) {
  let n = arr.length;
  let primary = 0;
  let secondary = 0;

  for (let i = 0; i < n; i++) {
    primary += arr[i][i];
    secondary += arr[i][n - 1 - i];
  }

  return Math.abs(primary - secondary);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
