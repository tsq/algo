const vowels = require("./index");

test('vowels function exists', () => {
  expect(typeof vowels).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});








