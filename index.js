function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

if (require.main === module) {
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
