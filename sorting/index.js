// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

/**
  Name          Worst Case Runtime            Difficulty
 Bubble             n^2                         easiest
 Selection          n^2                         easier
 Merge              n*log(n)                    medium
 */

function bubbleSort(arr) {
  const len = arr.length;
  for(let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      const lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  
}

function merge() {
  
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };