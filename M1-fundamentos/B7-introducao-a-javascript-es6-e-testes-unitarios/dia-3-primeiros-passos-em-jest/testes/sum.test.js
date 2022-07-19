const sum = require('./sum');

test('test sum of two values', () => {
  expect(sum(2, 3)).toBe(5);
});
