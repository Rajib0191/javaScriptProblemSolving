var collectingOddValues = function (arr) {
  let result = [];

  function helper(helperInput) {
    console.log("HELPER-INPUT:", helperInput);
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
};
console.log(collectingOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
