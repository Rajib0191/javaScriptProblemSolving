/** 
 * In JavaScript, a closure is created when a function is defined inside another function,
   and the inner function retains access to the variables and parameters of the outer function,
   even after the outer function has returned.

 * Closures are powerful because they allow you to create functions that have access to variables that are not in their own scope, 
   but in the scope of an outer function. This allows you to create functions with private state, 
   where the variables are not accessible from the outside.

**/

function outerFunction() {
  let outerVar = "I'm outside!";
  function innerFunction() {
    //This function is a Closures
    console.log(outerVar);
  }
  return innerFunction;
}
const inner = outerFunction();
inner();

/**
 *
 * Another Example
 *
 **/

let bankAccount = function (initialBalance) {
  var account = initialBalance;
  return function () {
    //This function is a Closures
    return account;
  };
};
var amount = bankAccount("1,00,000|=");
console.log(amount());

/**
 * Another Example
 *
 * This way give same result
 * This function don't take (num1, num2) as a parameter but it return right value.Because
 * function takes outer scope variable as a parameter
 **/
let x = 2;
let sum2 = function () {
  let y = 3;
  return function () {
    /**
     * This function is a closures
     * If do console.dir(sum2())
     * Browser Will show it is Closures
     **/
    return x + y;
  };
};

let res = sum2();
console.log(res());

/**
 * Another Different Example
 *
 *
 **/

var num1 = 2;
var num2 = 3;
var sum = function () {
  /**
   * This function is also a closures But
   * If you do console.dir(sum())
   * Browser not show the Closures
   **/
  return num1 + num2;
};
console.log(sum());

/**
 *Another Example
 **/

function stopWatch() {
  var startTime = Date.now();
  console.log("Start:", startTime);

  function getDelay() {
    var endTime = Date.now();
    console.log("End:", endTime);
    console.log("DIff:", endTime - startTime);
  }
  return getDelay;
}

var timer = stopWatch();

for (let i = 0; i < 1000000000; i++) {
  var a = Math.random() * 1000000;
}
timer();
