// --- Directions
// Write a function that accepts a string. The function should capitalize the first letter
// of each word in the string then return the capitalized string.
// --- Examples
// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working') --> 'Look, It Is Working'

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
function capitalize(str) {
  const words = [];
  const strArr = str.split(' ');
  strArr.forEach(item => {
    const word = item[0].toUpperCase() + item.slice(1);
    words.push(word);
  });
  return words.join(' ');
}
module.exports = capitalize;