function generateValidParenthesis(n) {
  const res = [];
  function backTrack(current, open, close) {
    console.log("current", current, "open", open, "close", close);
    if (current.length === n * 2) {
      res.push(current);
      console.log("res", res);
      return;
    }

    if (open < n) {
      backTrack(current + "(", open + 1, close);
    }

    if (close < open) {
      backTrack(current + ")", open, close + 1);
    }
  }
  backTrack([], 0, 0);
  return res;
}

console.log(generateValidParenthesis(3));
