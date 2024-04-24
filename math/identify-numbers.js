function identifyOddNumbers(numbers) {
  const numberOfNumbers = numbers.length;

  for (let index = 0; index < numberOfNumbers; index++) {
    const currentNumber = numbers[index];

    if (currentNumber % 2 == 0) {
      console.log(`Number [${currentNumber}] is even`);
    } else {
      console.log(`Number [${currentNumber}] is odd`);
    }
  }
}

identifyOddNumbers([20, 35, 31, 40]);
