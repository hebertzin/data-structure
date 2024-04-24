function countSort(arr) {
  const frequency = Array(100).fill(0);

  arr.forEach((num) => {
    frequency[num]++;
  });

  return frequency;
}

const arr = [1, 1, 3, 2, 1, 4, 3, 2, 1];
const frequency = countSort(arr);

