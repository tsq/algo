// -- Directions
// Write a function that accepts a positive number N
// The function should console log a pyramid shape
// with N levels using the # character. Make sure the
// pyramid has spaces on both the left *and* right hand sides
// -- Examples:
// pyramid(1)
//    '#'
// pyramid(2)
//    ' # '
//    '###'
// pyramid(3)
//    '  #  '
//    ' ### '
//    '######'

function pyramid(n) {
  const row = n;
  const col = 2 * n - 1;
  for(let i = 1; i <= row; i++) {
    let str = '';
    const charLen =  i * 2 - 1;
    const charStartIndex = row - i + 1;
    for (let j = 1; j <= col; j++) {
      if (j >= charStartIndex && j <= charLen + charStartIndex - 1) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
}

pyramid(5);
module.exports = pyramid;
