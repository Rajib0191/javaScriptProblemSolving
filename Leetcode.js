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
//======Another Way======Add the target value that position
let find = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      let temp = nums[i];
      nums[i] = target;
      nums.push(temp);
      console.log(nums);
      return i;
    }
  }
};
console.log(find([1, 3, 5, 6, 7, 10], 8));

// 53. Maximum Subarray
var maxSubArray = function (nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// =====Another Way=======
var maxSubArray = function (nums) {
  let max = nums[0]; //-2,1,1,4,4,5,6,6,6
  let currentSum = nums[0]; //-2,1,-2,4,3,5,6,1,5
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    max = Math.max(max, currentSum);
  }
  return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 844. Backspace String Compare
var backspaceCompare = function (s, t) {
  let arr = [];
  let arr1 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (t[j] === "#") {
      arr1.pop();
    } else {
      arr1.push(t[j]);
    }
  }
  if (arr.toString() === arr1.toString()) {
    return true;
  } else {
    return false;
  }
};
console.log(backspaceCompare("ab#c", "ad#c")); //true
console.log(backspaceCompare("a#c", "b")); //false

// 905. Sort Array By Parity
var sortArrayByParity = function (nums) {
  let oddArr = [];
  let evenArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenArr.push(nums[i]);
    } else {
      oddArr.push(nums[i]);
    }
  }
  return [...evenArr, ...oddArr];
};
console.log(sortArrayByParity([3, 1, 2, 4]));

// 581. Shortest Unsorted Continuous Subarray
var findUnsortedSubarray = function (nums) {
  let max = nums[0];
  let min = nums[nums.length - 1];
  let start = -1;
  let end = -2;
  for (let i = 1; i < nums.length; i++) {
    let j = nums.length - i - 1;
    max = Math.max(max, nums[i]);
    if (max > nums[i]) {
      end = i;
    }
    min = Math.min(min, nums[j]);
    if (min < nums[j]) {
      start = j;
    }
  }
  return end - start + 1;
};
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([2, 4, 6]));

// 58. Length of Last Word -> Made by Self
var lengthOfLastWord = function (s) {
  let count = 0;
  let space = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (count === 0) {
        space += 1;
      } else {
        return count;
      }
    } else {
      count += 1;
    }
  }
  return count;
};
console.log(lengthOfLastWord(" fly moon "));

// 66. Plus One
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9]));

// 1209. Remove All Adjacent Duplicates in String II
var removeDuplicates = function (s, k) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let peek = stack[stack.length - 1];
    if (stack.length === 0 || peek[0] !== current) {
      stack.push([current, 1]);
    } else {
      peek[1]++;
      if (peek[1] === k) {
        stack.pop();
      }
    }
  }
  let str = "";
  for (let i = 0; i < stack.length; i++) {
    str += stack[i][0].repeat(stack[i][1]);
  }
  return str;
};
console.log(removeDuplicates("abcd", 2));
// 67. Add Binary
var addBinary = function (a, b) {
  let len1 = a.length;
  let len2 = b.length;
  let max = Math.max(len1, len2);
  let res = "";
  let carry = 0;
  let val = 0;
  for (let i = 0; i < max; i++) {
    val =
      Number(a[a.length - 1 - i] || 0) +
      Number(b[b.length - 1 - i] || 0) +
      carry;
    carry = Math.floor(val / 2);
    res = (val % 2) + res;
  }
  if (carry > 0) {
    res = carry + res;
  }
  return res;
};
console.log(addBinary("10", "1"));
// 69. Sqrt(x)
var mySqrt = function (x) {
  let res = Math.floor(Math.sqrt(x));
  return res;
};
console.log(mySqrt(4));
