// --- Directions
// Given an string, return the character that is most
// commonly used in the string
// --- Examples
// maxChar("abccccccdd") === "c"
// maxChar("apple 12311111") === "1"

function maxChar(str) {
  let map = {};
  for (let char of str) {
    if (map[char] === undefined) {
      map[char] = 1;
    } else {
      map[char] = map[char] + 1;
    }
  }

  let maxKey = null;
  let maxValue = 0;
  for (let i in map) {
    if (map[i] > maxValue) {
      maxKey = i;
      maxValue = map[i];
    }
  }
  return maxKey;
}
module.exports = maxChar;