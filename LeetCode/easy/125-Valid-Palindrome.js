//=====Approach-01:=====
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

//=====Approach-02:Using Two Pointer=====
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome(".G?j!:;;:Gj?!."));
