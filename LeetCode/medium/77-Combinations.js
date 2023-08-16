var combine = function (n, k) {
  const result = [];
  const stack = [];
  let num = 1;

  while (true) {
    if (stack.length === k) {
      result.push(stack.slice());
    }

    if (stack.length === k || num > n) {
      if (stack.length === 0) {
        return result;
      }

      num = stack.pop() + 1;
    } else {
      stack.push(num);
      num++;
    }
  }
};

console.log(combine(4, 1));
