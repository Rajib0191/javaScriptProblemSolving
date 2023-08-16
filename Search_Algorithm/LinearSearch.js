var LinearSearch = function (arr, searchKey) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchKey) {
      return i;
    }
  }
  return -1;
};
console.log(LinearSearch([1, 2, 4, 5, 8, 6, 9, 7], 10));
