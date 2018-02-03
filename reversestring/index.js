// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
// reverseString('apple') === 'alppa'
// reverseString('hello') === 'ollel'
// reverseString('Greetings!') === '!sgniteerG'

/**
 * solution3
 * step: use reduce
 */
function reverseString(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverseString;


/**
 * solution1
 * step:
 * 1. turn 'str' into an array
 * 2. call 'reverse' method on the array
 * 3. join the array back into a string
 * 4. return the result
 */
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

/**
 * solution2
 * step:
 * 1. create an empty string called 'reversed'
 * 2. for each character in the provided string
 *    take the character and add it to the start of 'reversed'
 * 3. return the variable 'reversed'
 */
// function reverseString(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }
