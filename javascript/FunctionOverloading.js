// function add(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(2, 3, 4));
// console.log(add(2, 8));

// It will take last function. When there are multiple function with same Name, Last function will execute into the javascript.

function add() {
  if (arguments.length == 3) {
    return arguments[0] + arguments[1] + arguments[2];
  } else {
    return arguments[0] + arguments[1];
  }
}
console.log(add(2, 3, 4));
console.log(add(2, 8));
