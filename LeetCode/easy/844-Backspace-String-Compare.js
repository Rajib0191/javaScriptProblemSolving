// 844. Backspace String Compare
var backspaceCompare = function (s, t) {
  let arr = [];
  let arr1 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (t[j] === "#") {
      arr1.pop();
    } else {
      arr1.push(t[j]);
    }
  }
  if (arr.toString() === arr1.toString()) {
    return true;
  } else {
    return false;
  }
};
console.log(backspaceCompare("ab#c", "ad#c")); //true
console.log(backspaceCompare("a#c", "b")); //false
