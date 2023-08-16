const Fibonacci = (num) => {
  if (num < 3) return 1;
  let prev = 1;
  let curr = 1;
  for (let i = 2; i < num; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
};

console.log(Fibonacci(4));

// =========================================================

const FibonacciSeries = (num, fibSeries = [0, 1]) => {
  if (num <= 2) return fibSeries;
  const [prev, curr] = fibSeries.slice(-2);
  //   console.log(prev, curr);
  return FibonacciSeries(num - 1, [...fibSeries, prev + curr]);
};

console.log(FibonacciSeries(12));

// =========================================

const FibonacciPos = (pos) => {
  if (pos < 2) return pos;
  return FibonacciPos(pos - 1) + FibonacciPos(pos - 2);
};

console.log(FibonacciPos(2));
