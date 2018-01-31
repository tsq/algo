// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers
// --- Examples
// reverseInt(15) === 51
// reverseInt(-15) === -51
// reverseInt(-90) === -9

function reverseInt(n) {
  const str = n.toString();
  const reversed = str.split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;