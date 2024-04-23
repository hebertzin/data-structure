function isPalindromeString(str) {
  const reverseString = str.split("").reverse().join("");

  const isPalindrome = str == reverseString ? true : false;

  return isPalindrome;
}

const string = "arara";

const result = isPalindromeString(string);

console.log(result); // output : true;
