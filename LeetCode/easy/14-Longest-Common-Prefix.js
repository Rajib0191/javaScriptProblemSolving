// =====Approach-01=====
var longestCommonPrefix = function (strs) {
  if (!strs.length) return;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};

// =====Approach-02=====
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];
  let i = 0;

  while (i < first.length && first[i] === last[i]) {
    i++;
  }
  if (i > 0) {
    return first.substring(0, i);
  }
  return "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
