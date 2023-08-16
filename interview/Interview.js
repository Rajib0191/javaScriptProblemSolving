//=========1st Question===========How to Swaip two value without variable================>
// var a = 10;
// var b = 5;
// [a, b] = [b, a];
// console.log(a, b);
//=========2st Question===========What will be the output==========================>
// console.log(a); // Undefine
// var a = 10;
// console.log(a); // Cannot access 'a' before initialization
// let a = 10;
// console.log(a); // Cannot access 'a' before initialization
// const a = 10;
//=========3st Question===========What will be the output==========================>
// var obj1 = {
//   name: "Rajib",
//   age: 25,
// };
// var obj2 = {
//   name: "Azizul",
//   age: 25,
// };
// console.log(obj1 === obj2); //False
// console.log((obj1 = obj2)); //{ name: 'Azizul', age: 25 } obj1 = obj2 ar property bose jabe
// console.log(obj1 === obj2); //true
//=========4st Question===========Infinie Currying===========================================>
// function add(a) {
//   return function (b) {
//     if (b) {
//       return add(a + b);
//     } else {
//       return a;
//     }
//   };
// }
// console.log(add(2)(3)(4)(9)());
// =====================Closures=======================>
for (let i = 0; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000);
}

/**
 * First It's a Closures.
 * We Know That Closures Remember Outer Function Value.
 * let variable Is a block scope Every Time it gets a different i value
 * So that's why Output Will be the: 0,1,2
 *
 * var variable Is a functional scope.
 * After execute setTimeout() i=3.
 * it actually change it's value.
 * So That's why setTimeout() call howar agei i er value 3 hoye jai.
 **/

//===================What's the output of the object?====================>
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const obj = { ...arr };
// console.log(obj); //{"0":1,"1":2,....}

//================Promise=================================================>
// const promise = new Promise((res) => res(2));
// promise
//   .then((v) => {
//     console.log("Step-1", v);
//     return v * 2;
//   })
//   .then((v) => {
//     console.log("Step-2", v);
//     return v * 2;
//   })
//   .finally((v) => {
//     console.log("Step-3", v);
//   })
//   .then((v) => {
//     console.log("Step-4", v);
//     return v * 2;
//   });

/**
 * The .finally() method is called regardless of whether
 * the Promise is resolved or rejected.
 * It doesn't receive any arguments, and it logs "Step-3 undefined" to the console.
 */

//===================What's the output of the ?====================>

// let x = 20;
// function foo() {
//   console.log(x);
// }
// function bar() {
//   let x = 10;
//   foo();
// }
// bar();
/**
 * Output Will be 20 it's actually a closure.
 ***/
