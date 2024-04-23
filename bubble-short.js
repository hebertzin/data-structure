function bubbleShort(array) {
  const length = array.length - 1;

  for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

const array = [30, 40, 52, 84, 5, 987];

const result = bubbleShort(array) // output : [ 5, 30, 40, 52, 84, 987 ]

