function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] == target) {
      return mid;
    }
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;
const index = binarySearch(array, target); // output : 5;

console.log(index);
