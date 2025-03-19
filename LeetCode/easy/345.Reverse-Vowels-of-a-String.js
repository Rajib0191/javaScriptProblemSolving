var reverseVowels = function (s) {
  s = s.split("");
  let a = 0;
  let b = s.length - 1;
  const vowels = "AaEeIiOoUu";
  while (a < b) {
    if (vowels.includes(s[a]) && vowels.includes(s[b])) {
      let temp = s[a];
      s[a] = s[b];
      s[b] = temp;
      a++;
      b--;
    }

    if (!vowels.includes(s[a])) {
      a++;
    }
    if (!vowels.includes(s[b])) {
      b--;
    }
  }

  return s.join("");
};

console.log(reverseVowels("IceCreAm"));
