var mergeAlternately = function (word1, word2) {
  let merge = "";
  let i = 0;
  let j = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      merge = merge + word1[i];
      i++;
    }
    if (j < word2.length) {
      merge = merge + word2[j];
      j++;
    }
  }

  return merge;
};

console.log(mergeAlternately("abcd", "pqr"));
