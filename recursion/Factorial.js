var factorial = function (num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};
console.log(factorial(5));

// ========================================

var factorial = function (num) {
  let res = 1;
  for (let i = num; i > 0; i--) {
    res = res * i;
  }
  return res;
};
console.log(factorial(5));
