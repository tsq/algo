// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// arrayChunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
// arrayChunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
// arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[1, 2, 3], [4, 5, 6], [7, 8]]
// arrayChunk([1, 2, 3, 4, 5], 4) --> [[1, 2, 3, 4], [5]]
// arrayChunk([1, 2, 3, 4, 5], 10) --> [[1, 2, 3, 4, 5]]

function arrayChunk(array, size) {
  let result = [];
  let resultLen = Math.ceil(array.length / size);

  for (let i  = 0; i < resultLen; i++) {
    let index = i * size;
    result.push(array.slice(index, size + index))
  }

  return result;
}
module.exports = arrayChunk;