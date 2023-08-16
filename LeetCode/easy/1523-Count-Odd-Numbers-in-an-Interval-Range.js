// 1523. Count Odd Numbers in an Interval Range
var countOdds = function (low, high) {
  // let numArr = []
  // while(low <= high){
  //     if(low % 2 !== 0){
  //         numArr.push(low);
  //         low++;
  //     }else{
  //         low++;
  //     }
  // }
  // console.log(numArr)
  // return numArr.length;
  return (
    Math.floor((high - low) / 2) + (low % 2 === 1 || high % 2 === 1 ? 1 : 0)
  );
};
console.log(countOdds(3, 7));
