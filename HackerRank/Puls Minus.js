function plusMinus(ar) {
  let count = ar.length;
  let pC = 0;
  let nC = 0;
  let neC = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > 0) {
      pC = pC + 1;
    } else if (ar[i] === 0) {
      neC = neC + 1;
    } else {
      nC = nC + 1;
    }
  }

  console.log((pC / count).toFixed(6));
  console.log((nC / count).toFixed(6));
  console.log((neC / count).toFixed(6));
}

console.log(plusMinus([1, 1, 0, -1, -1]));
