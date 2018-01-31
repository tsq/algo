// -- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not. Palindromes are strings that form the
// same word if it is reversed. *Do* include spaces and punctuation
// in determing if the string is a palindrome.
// -- Examples:
// palindrome('abba') === true
// palindrome('abcdefg') === false

function palindrome(str) {
  const arr = str.split('');
  const len = arr.length;
  return arr.every((i, index) => i === arr[len - 1 - index]);
}

module.exports = palindrome;

/**
 * solution1
 */
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return reversed === str;
// }