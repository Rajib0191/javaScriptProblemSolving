//20. Valid Parentheses
const string1 = "[[{([[({})]])}]]";
const string2 = "[[{([[({})]])}]";
var isValid = function (s) {
  let arr = s.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currElement = arr[i];
    if (currElement === "[" || currElement === "{" || currElement === "(") {
      newArr.push(currElement);
    } else {
      if (newArr.length === 0) {
        console.log("False-1");
        return false;
      }
      const lastElement = newArr[newArr.length - 1];
      //   console.log(lastElement, "last");
      const del = newArr.pop();
      //   console.log(del, "delete");
      if (lastElement === "[" && currElement === "]") {
        //   Ok
      } else if (lastElement === "{" && currElement === "}") {
        //   Ok
      } else if (lastElement === "(" && currElement === ")") {
        //   Ok
      } else {
        console.log("False-2");
        return false;
      }
    }
  }
  if (newArr.length !== 0) {
    console.log("False-3");
    return false;
  }
  return true;
};
console.log(isValid(string1));
console.log(isValid(string2));
