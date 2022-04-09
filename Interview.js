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
function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    } else {
      return a;
    }
  };
}
console.log(add(2)(3)(4)(9)());
