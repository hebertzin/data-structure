function linearSearch(array, target) {
  const length = array.length - 1;

  for (let i = 0; i <= length; i++) {
    if (array[i] == target) {
      return {
        index: i,
        element: array[i],
      };
    }
  }

  return -1; // element was not found in the array
}

const listOfElements = [40, 20, 498, 29, 982, 82];

const successExemple = linearSearch(listOfElements, 20); // output : 20
const badExemple = linearSearch(listOfElements, 87); // element does not exist in the list


console.log(successExemple)