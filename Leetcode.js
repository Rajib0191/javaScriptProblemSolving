//======================================Easy========================================
//14. Longest Common Prefix
const longestCommonPrefix = function (strs) {
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
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

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

//21. Merge Two Sorted Lists
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function merge(L1, L2) {
  // create new linked list pointer
  var L3 = new Node(null, null);
  var prev = L3;

  // while both linked lists are not empty
  while (L1 !== null && L2 !== null) {
    if (L1.data <= L2.data) {
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }
    prev = prev.next;
  }

  // once we reach end of a linked list, append the other
  // list because we know it is already sorted
  if (L1 === null) {
    prev.next = L2;
  }
  if (L2 === null) {
    prev.next = L1;
  }

  // return the sorted linked list
  return L3.next;
}

// create first linked list: 1 -> 3 -> 10
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1;

// create second linked list: 5 -> 6 -> 9
var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4;
console.log(merge(L1, L2));

// 26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  let len = nums.length;
  let last = NaN;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== last) {
      nums[count] = nums[i];
      last = nums[i];
      console.log(last);
      count++;
    }
  }
  return count;
};
console.log(removeDuplicates([1, 1, 2]));

// 27. Remove Element
var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};
console.log(removeElement([2, 3, 3, 2], 3));

// 28. Implement strStr()
var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
      if (j === needle.length - 1) return i;
    }
  }
  return -1;
};
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));

//35. Search Insert Position
var searchInsert = function (nums, target) {
  console.log(nums, target);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};
console.log(searchInsert([1, 3, 5, 6], 5));
