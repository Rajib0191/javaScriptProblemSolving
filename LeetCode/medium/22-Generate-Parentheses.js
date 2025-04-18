function generateParenthesis(n) {
  let result = [];
  let stack = [{ str: "", left: n, right: n }];

  while (stack.length > 0) {
    console.log("Stack:", stack);
    let { str, left, right } = stack.pop();
    if (left === 0 && right === 0) {
      result.push(str);
    } else {
      if (left > 0) {
        stack.push({ str: str + "(", left: left - 1, right });
      }
      if (right > left) {
        stack.push({ str: str + ")", left, right: right - 1 });
      }
    }
  }
  return result;
}
// Time Complexity -> O(4^n/sqrt(n)).
console.log(generateParenthesis(3));

// =====Another Approach=====
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
  backTrack("", 0, 0);
  return res;
}

console.log(generateValidParenthesis(3));
