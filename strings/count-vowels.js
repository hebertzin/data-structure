function countVowles(string) {
  let totalVowels = 0;

  string = string.toLowerCase();

  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      totalVowels++;
    }
  }
  return totalVowels;
}

const string = "Arara";

const result = countVowles(string); // output : 3;
