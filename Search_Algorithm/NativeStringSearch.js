var NativeStringSearch = function (str, searchStr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < searchStr.length; j++) {
      if (searchStr[j] !== str[i + j]) {
        break;
      }
      if (j === searchStr.length - 1) {
        count++;
      }
    }
  }
  return count;
};
console.log(NativeStringSearch("sdomgwhfomg", "omg"));
