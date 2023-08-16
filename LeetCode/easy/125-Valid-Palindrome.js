// 125. Valid Palindrome
var isPalindrome = function (s) {
  let arr = s.split("");
  let res = [];
  let alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
  for (let i of arr) {
    if (alphabet.includes(i.toLowerCase())) {
      res.push(i.toLowerCase());
    }
  }
  return res.join("") === res.reverse().join("");
};

console.log(isPalindrome(".G?j!:;;:Gj?!."));
