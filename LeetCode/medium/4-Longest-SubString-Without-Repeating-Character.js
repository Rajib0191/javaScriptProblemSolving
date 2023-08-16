// 4. Longest SubString without repeating character

// let str = "abc";

// for (let i = 0; i < str.length; i++) {
//   for (let j = i + 1; j < str.length + 1; j++) {
//     console.log(str.slice(i, j));
//   }
// }

var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let str = "";

  if (s.length === 0) return 0;

  while (start < s.length && end < s.length) {
    if (!str.includes(s[end])) {
      str = str + s[end];
      end++;
      maxLength = Math.max(maxLength, str.length);
    } else {
      str = str.replace(s[start], "");
      start++;
    }
  }
  console.log(str);

  return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("bbtablud"));
