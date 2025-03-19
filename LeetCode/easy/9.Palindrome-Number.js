var isPalindrome = function (x) {
  y = x;
  reverse = 0;
  while (x > 0) {
    reminder = x % 10;
    reverse = reverse * 10 + reminder;
    x = Math.floor(x / 10);
  }
  if (y === reverse) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
