//How to Sort an Array Number
let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort((a, b) => a - b);
console.log(numbers);
//=========Another Way=========
let numbers1 = [0, 1, 2, 3, 10, 20, 30];
numbers1.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(numbers1);
// How to swap two number without any temp veriable
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);
// Find Largest Number into an array
const LargestNumber = function (num) {
  let max = num[0];
  for (let i = 1; i < num.length; i++) {
    if (max > num[i]) {
      max = max;
    } else {
      max = num[i];
    }
  }
  return max;
};
console.log(LargestNumber([20, 50, 10, 100]));
