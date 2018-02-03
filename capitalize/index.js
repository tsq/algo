// --- Directions
// Write a function that accepts a string. The function should capitalize the first letter
// of each word in the string then return the capitalized string.
// --- Examples
// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working') --> 'Look, It Is Working'

/**
 * solution2
 * step:
 * 1. create an empty string called 'result'
 * 2. for each character in the string
 *    IF the character to the left a space
 *      capitalize it and add it to 'result'
 *    ELSE
 *      add it to 'result'
 */
function capitalize(str) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    const left = str[i - 1];
    if (left === ' ') {
      result += str[i].toUpperCase();
    } else {
      if (i === 0) {
        result += str[i].toUpperCase(); // the first it a exception, it must be uppercase
      } else {
        result += str[i];
      }
    }
  }
  return result;
}
module.exports = capitalize;

/**
 * solution1
 * step:
 * 1. make an empty array 'words'
 * 2. split the input string by spaces to get an array
 * 3. for each word in the array
 *    uppercase the first letter of the word
 *    join first letter with rest of the string
 *    push result into 'words' array
 * 4. join 'words' into a string and return it
 */
// function capitalize(str) {
//   const words = [];
//   const strArr = str.split(' ');
//   strArr.forEach(item => {
//     const word = item[0].toUpperCase() + item.slice(1);
//     words.push(word);
//   });
//   return words.join(' ');
// }