function inversionStr(str) {
  const reverseString = str.split("").reverse().join("");

  return reverseString;
}

const string = "hello";

const result = inversionStr(string);

console.log(result); // output : olleh;
