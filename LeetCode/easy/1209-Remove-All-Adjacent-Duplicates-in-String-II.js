// 1209. Remove All Adjacent Duplicates in String II
var removeDuplicates = function (s, k) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let peek = stack[stack.length - 1];
    if (stack.length === 0 || peek[0] !== current) {
      stack.push([current, 1]);
    } else {
      peek[1]++;
      if (peek[1] === k) {
        stack.pop();
      }
    }
  }
  let str = "";
  for (let i = 0; i < stack.length; i++) {
    str += stack[i][0].repeat(stack[i][1]);
  }
  return str;
};
console.log(removeDuplicates("abcd", 2));
