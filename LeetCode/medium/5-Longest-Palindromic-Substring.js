// 5. Longest Palindromic Substring
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let longest = s[0];

  for (let i = 0; i < s.length - 1; i++) {
    let oddPalindrome = getPalindromeFrom(s, i, i);
    // console.log("Odd:", oddPalindrome);
    let evenPalindrome = getPalindromeFrom(s, i, i + 1);
    // console.log("Even:", evenPalindrome);
    let currentLongest =
      oddPalindrome.length > evenPalindrome.length
        ? oddPalindrome
        : evenPalindrome;
    if (currentLongest.length > longest.length) longest = currentLongest;
  }
  return longest;
};
var getPalindromeFrom = function (s, left, right) {
  // console.log(s, left, right);
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
    // console.log("True");
  }
  // console.log("Another:", left + 1, right);
  return s.slice(left + 1, right);
};
console.log(longestPalindrome("ca"));
