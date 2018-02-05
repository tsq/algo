// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// --- Examples
// fib(4) === 3

// solution 4
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

// solution 3
// O(n^2)
/*
                                                fib(5)
                           fib(4)                                   fib(3)
               fib(3)               fib(2)                fib(2)                fib(1)
       fib(2)         fib(2)     fib(1) fib(0)         fib(1) fib(0)
    fib(1) fib(0)  fib(1) fib(0)

    fib(5) = 1+0+1=0+1+0+1+0+1 = 5
 */
/*function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}*/

// solution 1
/*
function fib(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  return result.pop();
}*/


// solution 2

// runtime complexity: O(n)
/*
function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result[n];
}*/

