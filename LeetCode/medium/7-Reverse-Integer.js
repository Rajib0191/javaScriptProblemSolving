// 7. Reverse Integer
var reverse = function (x) {
  let sign = Math.sign(x);
  x *= sign;
  let rev = 0;
  let obo;
  while (x > 0) {
    obo = x % 10;
    rev = rev * 10 + obo;
    x = Math.floor(x / 10);
  }
  return rev > 0x7fffffff ? 0 : rev * sign;
};
console.log(reverse(-123));
