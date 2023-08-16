function Merge(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}
// console.log(Merge([1, 3, 9], [2, 5, 8]));
// console.log(MergeSort([1, 10, 50], [2, 14, 99, 100]));

function MergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));
  console.log("Left:", left, "Right:", right);
  return Merge(left, right);
}
console.log(MergeSort([23, 345, 5467, 12, 2345, 9852]));
