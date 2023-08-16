function sumArrays(array1, array2) {
  let sum = [];
  let length = Math.min(array1.length, array2.length);
  for (let i = 0; i < length; i++) {
    sum.push(array1[i] + array2[i]);
  }
  if (array1.length > length) {
    for (let i = length; i < array1.length; i++) {
      sum.push(array1[i]);
    }
  }
  if (array2.length > length) {
    for (let i = length; i < array2.length; i++) {
      sum.push(array2[i]);
    }
  }
  return sum;
}

let array1 = [1, 2, 6, 9];
let array2 = [4, 5, 6];
let result = sumArrays(array1, array2);
console.log(result); // Output: [5, 7, 12,9]

// The time complexity of this code is O(n), where n is the length of the larger array.
// The space complexity is O(n) as well, because a new array is created to store the sum of the elements.
