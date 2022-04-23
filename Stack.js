class Stack extends Array {
  constructor(...elements) {
    super(...elements);
  }
  pop() {
    if (this.length === 0) {
      throw new Error("Nothing to pop!");
    }
    super.pop();
  }
  peek() {
    if (this.length === 0) {
      throw new Error("Nothing to pop!");
    }
    return this[this.length - 1];
  }
}
const s = new Stack(1, 2, 3);
s.push(100);
console.log(s.peek());
console.log(s);
// =============Example===============
class Stack extends Array {
  constructor(...elements) {
    super(...elements);
  }
  pop() {
    if (this.length === 0) {
      throw new Error("Nothing to pop!");
    }
    super.pop();
  }
  peek() {
    if (this.length === 0) {
      throw new Error("Nothing to pop!");
    }
    return this[this.length - 1];
  }
  size() {
    return this.length;
  }
}
const string1 = "[[{([[({})]])}]]";
const string2 = "[[{([[({})]])}]";

function check(string) {
  const arr = string.split("");
  const stack = new Stack();

  for (let i = 0; i < arr.length; i++) {
    const currentEle = arr[i];
    if (currentEle === "[" || currentEle === "{" || currentEle === "(") {
      stack.push(currentEle);
    } else {
      // "]","}",")"
      if (stack.size() === 0) {
        console.log("Failed-1");
        return false;
      }
      const lastElement = stack.peek();
      stack.pop();
      if (lastElement === "[" && currentEle === "]") {
        //Ok
      } else if (lastElement === "{" && currentEle === "}") {
        //ok
      } else if (lastElement === "(" && currentEle === ")") {
        //OK
      } else {
        // Not Ok
        console.log("Failed-2");
        return false;
      }
    }
  }
  if (stack.size() !== 0) {
    console.log("Failed-3");
    return false;
  }
  return true;
}
console.log(check(string1));
console.log(check(string2));
