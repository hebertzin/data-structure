function lonelyinteger(a) {
  const counts = {};

  for (let num of a) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (let num in counts) {
    if (counts[num] === 1) {
      return parseInt(num);
    }
  }

  return null;
}

const arr = [2, 3, 4, 4, 3, 2, 265];
const uniqueElement = lonelyinteger(arr);
console.log(uniqueElement); // output: 265
