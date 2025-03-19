var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let temp = s[i];
    if (map.get(temp)) {
      map.set(temp, map.get(s[i]) + 1);
    } else {
      map.set(temp, 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    let temp = t[j];
    if (map.get(temp)) {
      map.set(temp, map.get(t[j]) - 1);
    } else {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
