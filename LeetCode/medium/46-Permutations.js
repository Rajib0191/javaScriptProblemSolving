// 46. Permutations
function permute(arr, permutation = [], ans = []) {
  if (arr.length === 0) {
    ans.push([...permutation]);
  }
  for (let i = 0; i < arr.length; i++) {
    permutation.push(arr[i]);
    const choices = arr.filter((num, index) => index !== i);
    console.log("Per:", permutation);
    console.log("Choice:", choices);
    permute(choices, permutation, ans);

    permutation.pop();
  }
  return ans;
}

// Another Way - 02
// const swap = (arr, i, j) => {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// };
// function permute(nums, start = 0, answer = []) {
//   if (start === nums.length - 1) {
//     answer.push([...nums]);
//   }
//   for (let i = start; i < nums.length; i++) {
//     swap(nums, start, i);
//     permute(nums, start + 1, answer);
//     swap(nums, start, i);
//   }
//   return answer;
// }

const arr = [1, 2, 3];
const permutations = permute(arr);
console.log(permutations);
