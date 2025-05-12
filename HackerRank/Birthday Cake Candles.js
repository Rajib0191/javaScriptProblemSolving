function birthdayCakeCandles(candles) {
  let count = 0;
  let i = 0;
  let j = candles.length - 1;
  const max = Math.max(...candles);

  while (i <= j) {
    if (max === candles[i]) {
      count += 1;
      i++;
    } else {
      i++;
    }
  }
  return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
