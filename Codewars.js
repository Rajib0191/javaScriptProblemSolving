//===================Ans-01=================
const createNDimensionalArray = (n, s) => {
  let arr = Array(s).fill(`level ${n}`);
  for (let i = 1; i < n; i++) {
    arr = Array(s).fill(arr);
  }
  return arr;
};
console.log(createNDimensionalArray(3, 2));
//====================Ans-02=================
function jumpTo(x, y) {
  let steps = 0;
  while (y > x) {
    if (y % 2 == 0 && y / 2 >= x) {
      y = y / 2;
      steps++;
    } else {
      y--;
      steps++;
    }
  }
  return steps;
}
console.log(jumpTo(1, 7));
//====================Ans-03=================
function amountOfPages(summary) {
  let page = 1;
  let str = "";
  while (summary > str.length) {
    str = str + page;
    page++;
  }
  return page - 1;
}
console.log(amountOfPages(192));
//====================Ans-04=================
function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  str = "";
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += " ".repeat(len);
    str += "*".repeat(n - 2 * len);
    str += "\n";
  }
  return str;
}
console.log(diamond(5));
//====================Ans-05=================
function diamond(n) {
  let str = "";
  if (n < 0 || n % 2 === 0) {
    return null;
  } else {
    for (let i = 0; i < n; i++) {
      let len = (n - i * 2 - 1) / 2;
      if (len >= 0) {
        str = str + " ".repeat(len);
        str = str + "*".repeat(n - len * 2);
        str = str + "\n";
      }
    }
  }
  return str;
}
console.log(diamond(15));
//====================Ans-06=================
// function inArray(arr1, arr2) {
//   return arr1.filter((str) => arr2.some((str2) => str2.includes(str))).sort();
// }
function inArray(array1, array2) {
  let str = [];
  for (let x = 0; x < array1.length; x++) {
    for (let y = 0; y < array2.length; y++) {
      if (array2[y].includes(array1[x]) === true) {
        str.push(array1[x]);
      } else {
      }
    }
  }
  str = [...new Set(str)];
  return str.sort();
}
console.log(
  inArray(
    (a1 = ["arp", "live", "strong"]),
    (a2 = ["lively", "alive", "harp", "sharp", "armstrong"])
  )
);
//====================Ans-07=================
function to_nato(words) {
  var translate = {
    a: "Alfa ",
    b: "Bravo ",
    c: "Charlie ",
    d: "Delta ",
    e: "Echo ",
    f: "Foxtrot ",
    g: "Golf ",
    h: "Hotel ",
    i: "India ",
    j: "Juliett ",
    k: "Kilo ",
    l: "Lima ",
    m: "Mike ",
    n: "November ",
    o: "Oscar ",
    p: "Papa ",
    q: "Quebec ",
    r: "Romeo ",
    s: "Sierra ",
    t: "Tango ",
    u: "Uniform ",
    v: "Victor ",
    w: "Whiskey ",
    x: "Xray ",
    y: "Yankee ",
    z: "Zulu ",
    ",": ", ",
    "?": "? ",
    ".": ". ",
    "!": "! ",
  };

  let str = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === " ") {
      str += "";
    } else {
      str += translate[words[i].toLowerCase()];
    }
  }
  return str.trim();
}
console.log(to_nato("go, for it!"));

//====================Ans-08=================
function isOddHeavy(n) {
  if (n.every((x) => x === 0 || x % 2 === 0)) {
    return false;
  }
  let odd = [];
  let eve = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
      eve.push(n[i]);
    } else {
      odd.push(n[i]);
    }
  }
  for (let j = 0; j < odd.length; j++) {
    for (let k = 0; k < eve.length; k++) {
      if (eve[k] < odd[j]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}
console.log(oddHeavy([11, 4, 9, 2, 8]));
function oddHeavy(n) {
  if (n.every((x) => x === 0 || x % 2 === 0)) {
    return false;
  }
  let odd = [];
  let eve = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
      eve.push(n[i]);
    } else {
      odd.push(n[i]);
    }
  }
  let oddmin = Math.min(...odd);
  let eveMax = Math.max(...eve);
  console.log(oddmin, eveMax);
  if (oddmin > eveMax) {
    return true;
  } else {
    return false;
  }
}
console.log(isOddHeavy([11, 4, 9, 2, 8]));

//====================Ans-09=================
function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(solution(100));
