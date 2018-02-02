// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character. Make sure the
// step has spaces on the right hand side !
// --- Examples
// step(2)
//    '# '
//    '##'
// step(3)
//    '#  '
//    '## '
//    '###'
// step(4)
//    '#   '
//    '##  '
//    '### '
//    '####'


/**
 * Recursion Tips
 * 1. figure out the bare minimum pieces of information to represent your problem
 * 2. give reasonable defaults to the bare minimum pieces of into
 * 3. check the base case. Is there any work left to do? If not, return
 * 4. do some work. Call your function again, making sure the arguments have changed in some fashion.
 */
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return ;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}
module.exports = steps;

// solution 1
/*
function steps(n) {
  const row = n;
  const col = n;
  for (let i = 1; i <= row; i++) {
    let str = '';
    for (let j = 1; j <= col; j++) {
      if (j <= i) {
        str += '#'
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
}*/
