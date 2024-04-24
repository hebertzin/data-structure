/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let mainDiagonal = 0;
  let secondDiagonal = 0;
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    mainDiagonal += arr[i][i];
    secondDiagonal += arr[i][length - i - 1];
  }

  const difference = Math.abs(secondDiagonal - mainDiagonal);

  return difference;
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

diagonalDifference(array);
