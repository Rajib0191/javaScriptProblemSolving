var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (t.length > j) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  if (i === s.length) {
    return true;
  } else {
    return false;
  }
};

console.log(isSubsequence("axc", "ahbgdc"));
