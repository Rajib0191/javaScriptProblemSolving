/**
 * Var functional Scope Howar jonne If ar bahire Hoisting ar kaj kore
 * and language undefine korar fole If Block ar vitor enter kore
 * Language Change kore disse.
 **/

// var language = "JavaScript";
// var LANGUAGE = "JAVA";

// function getLanguage() {
//   //   var language;
//   //   console.log("Outer:", language);
//   if (!language) {
//     // console.log("IN:", language);
//     var language = LANGUAGE; //After Hoisting line number 5,10 created
//     // language = LANGUAGE;
//     // console.log("1:", language);
//   }
//   return language;
// }

// console.log("Output:", getLanguage());

/**
 * Another Example
 * Let Block Scope howar jonne If ar vitorei kaj korbe
 * Ei Jonno amra expected behavior passi
 **/

// let language = "JavaScript";
// let LANGUAGE = "JAVA";

// function getLanguage() {
//   if (!language) {
//     // console.log("IN:", language);
//     let language;
//     // let language = LANGUAGE; //After Hoisting line number 5,10 created
//     language = LANGUAGE;
//     // console.log("1:", language);
//   }
//   return language;
// }

// console.log("Output:", getLanguage());

/**
 * Another Example
 * Functional Example
 * myFunc() ta function bodyr upore korleo same result asbe for hoisting.
 * Hoisting Function Body Gulo ke Sobar Upore Tule Ane.
 **/

// myFunc();
// function myFunc() {
//   console.log(`I love JavaScript`);
// }

// function myFunc2() {
//   console.log(`I love JavaScript2`);
// }
// myFunc2();

/**
 * Another Example
 * Functional Example
 * When we set function into another variable and
 * Call the function in Upper
 * It will show ReferenceError
 * 
   const func;
   func(); //First It is Undefine and Then It is JavaScript.
   func = function myFunc3() {
   let language = "JavaScript";
   console.log(language);
  };

 **/

func();
const func = function myFunc3() {
  let language = "JavaScript";
  console.log(language);
};

// const func = function myFunc3() {
//   let language = "JavaScript";
//   console.log(language);
// };
// func();
