// function arrayReplace(arr) {
//   let newArray = [];
//   let substractionEle = 3;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       newArray.push(substractionEle);
//     } else {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
// console.log(arrayReplace([1, 2, 3]));4
//===============Another Way===============
// function arrayReplace(arr, elememtToReplace, substractionEle) {
//   arr.forEach((element, index) => {
//     if (element === elememtToReplace) {
//       arr[index] = substractionEle;
//     }
//   });
//   return arr;
// }
// console.log(arrayReplace([1, 2, 3], 1, 3));
//===============Add infinity Number=========================?
// function sum(...params) {
//   let totalSum = 0;
//   params.forEach((element) => {
//     totalSum += element;
//   });
//   return totalSum;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10));
//=====================Add Border==============================?
function addBorder(picture) {
  let wall = "*".repeat(picture[0].length + 2);
  picture.unshift(wall); //Arrayr suru te Element Add kore
  picture.push(wall); // Arrayr ses a Element Add kore
  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }
  return picture;
}
console.log(addBorder(["abc", "def"]));
