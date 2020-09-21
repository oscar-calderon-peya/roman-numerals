const { sum } = require('./index');

it('returns the addition of two numbers', () => {
  expect(sum(1, 1)).toBe(2);
  expect(sum(1, -1)).toBe(0);
});
