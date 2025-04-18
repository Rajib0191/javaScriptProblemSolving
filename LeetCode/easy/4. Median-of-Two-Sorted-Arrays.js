var findMedianSortedArrays = function (nums1, nums2) {
  let finalArr = nums1.concat(nums2).sort((a, b) => a - b);
  if (finalArr.length % 2) {
    return finalArr[Math.floor(finalArr.length / 2)];
  } else {
    let firstIndex = finalArr.length / 2;
    let lastIndex = finalArr.length / 2 - 1;
    return (finalArr[firstIndex] + finalArr[lastIndex]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2, 4]));
