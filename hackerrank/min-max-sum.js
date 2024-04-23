function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);

  const minSum = arr
    .slice(0, arr.length - 1)
    .reduce((acc, current) => acc + current, 0);

  const maxSum = arr.slice(-4).reduce((acc, curr) => acc + curr, 0);

  console.log(`${minSum} ${maxSum}`);
}

const list = [1, 2, 3, 4, 5];
miniMaxSum(list);
