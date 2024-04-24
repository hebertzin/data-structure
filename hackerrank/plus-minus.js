function plusMinus(arr) {
  const length = arr.length;

  let positives = 0;
  let negatives = 0;
  let zero = 0;

  for (let i = 0; i <= length; i++) {
    if (arr[i] > 0) {
      positives++;
    }
    if (arr[i] == 0) {
      zero++;
    }
    if (arr[i] < 0) {
      negatives++;
    }
  }
  const positiveProportion = (positives / length).toFixed(6);
  const negativeProportion = (negatives / length).toFixed(6);
  const zeroProportion = (zero / length).toFixed(6);

  console.log(positiveProportion);
  console.log(negativeProportion);
  console.log(zeroProportion);
}

const list = [1, 1, 0, -1, -1];

plusMinus(list);

