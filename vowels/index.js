// --- Directions
// Write a function that returns the number of vowels
// used in a string. Vowels are the characters 'a', 'e', 'i', 'o', and 'u'
// --- Examples
// vowels('Hi there!') --> 3
// vowels('why do you ask?') --> 4
// vowels('why?') --> 0

function vowels(str) {
  let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
module.exports = vowels;

// solution 1

/*function vowels(str) {
  let count = 0;
  const arr = ['a', 'e', 'i', 'o', 'u'];
  for (let i of str.toLowerCase()) {
    if (arr.includes(i)) {
      count++;
    }
  }
  return count;
}*/

