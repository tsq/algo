// --- Directions
// Check to see if two provided strings are anagrams of eachother
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case.
// --- Examples
// anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there', 'Bye there') --> false

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }
  const lowerStrA = stringA.toLowerCase();
  const lowerStrB = stringB.toLowerCase();
  const mapStrA = mapStr(lowerStrA);
  const mapStrB = mapStr(lowerStrB);

  // console.log("mapStrA", mapStrA);
  // console.log("mapStrB", mapStrB);

  let flag = true;
  for (let i in mapStrA) {
    const curValue = mapStrA[i];
    if (mapStrB[i] !== curValue) {
      flag = false;
      break;
    }
  }
  return flag;
}

function mapStr(str) {
  const map = {};
  for (let i of str) {
    if (map[i] === undefined) {
      map[i] = 1;
    } else {
      map[i]++;
    }
  }
  return map;
}
// console.log(anagrams('A tree, a life, a bench', 'A tree, a fence, a yard'));
module.exports = anagrams;