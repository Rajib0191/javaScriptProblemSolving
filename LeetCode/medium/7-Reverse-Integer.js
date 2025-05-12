var reverse = function (x) {
  let isNegative = x < 0;
  x = Math.abs(x);
  let reversed = 0;

  while (x > 0) {
    let remainder = x % 10;
    reversed = reversed * 10 + remainder;
    x = Math.floor(x / 10);
  }

  if (isNegative) reversed *= -1;

  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  if (reversed < INT_MIN || reversed > INT_MAX) return 0;
  return reversed;
};

console.log(reverse(123));
