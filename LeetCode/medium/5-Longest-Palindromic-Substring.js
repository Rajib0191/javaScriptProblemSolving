var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let longest = s[0];

  for (let i = 0; i < s.length - 1; i++) {
    let oddPalindrome = getPalindromeFrom(s, i, i);
    console.log("Odd:", oddPalindrome);
    let evenPalindrome = getPalindromeFrom(s, i, i + 1);
    console.log("Even:", evenPalindrome);
    let currentLongest =
      oddPalindrome.length > evenPalindrome.length
        ? oddPalindrome
        : evenPalindrome;
    if (currentLongest.length > longest.length) longest = currentLongest;
  }
  return longest;
};
var getPalindromeFrom = function (s, left, right) {
  console.log("str:", s, "Left:", left, "Right:", right);
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
    // console.log("True");
  }
  // console.log("Another:", left + 1, right);
  console.log("Left:", left, "Right:", right);
  return s.slice(left + 1, right);
};
console.log(longestPalindrome("babad"));

// =====Another Approach=====Brute Force=====
var longestPalindrome2 = function (s) {
  let max = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      console.log("Result:", isPalindrome(s, i, j));
      if (isPalindrome(s, i, j) === true) {
        if (j - i + 1 > max) {
          max = j - i + 1;
          start = i;
          end = j;
          console.log("Max:", j - i + 1, "Start:", start, "End:", end);
        }
      }
    }
  }
  return s.slice(start, end + 1);
};

var isPalindrome = function (s, left, right) {
  console.log("string:", s, "Left:", left, "Right:", right);
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
console.log(longestPalindrome2("eabad"));
