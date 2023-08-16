// 58. Length of Last Word -> Made by Self
var lengthOfLastWord = function (s) {
  let count = 0;
  let space = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (count === 0) {
        space += 1;
      } else {
        return count;
      }
    } else {
      count += 1;
    }
  }
  return count;
};
console.log(lengthOfLastWord(" fly moon "));
