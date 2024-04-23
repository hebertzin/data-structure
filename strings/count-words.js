function countWords(str) {
  const arr = str.split(" ");

  const totalWords = arr.length;

  return totalWords;
}

const Phrase = "Hello my name is hebert";

const result = countWords(Phrase);

console.log(result) // output : 5;
