// =====Approach-01=====
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

// =====Approach-02=====
var isValid = function (s) {
  let arr = [];
  let bracket = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (bracket[s[i]]) {
      arr.push(s[i]);
    } else {
      if (s[i] != bracket[arr.pop()]) {
        return false;
      }
    }
  }
  return arr.length ? false : true;
};

console.log(isValid("[[{([[({})]])}]]"));
