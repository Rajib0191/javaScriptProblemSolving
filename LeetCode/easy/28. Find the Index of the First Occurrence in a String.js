var strStr = function (haystack, needle) {
  let m = haystack.length;
  let n = needle.length;
  for (let i = 0; i <= m - n; i++) {
    let j = 0;
    while (j < n && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === n) {
      return 1;
    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
