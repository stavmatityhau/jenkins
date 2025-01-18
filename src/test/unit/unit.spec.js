// test/unit/unit.spec.js
const { sum } = require('../../src/script');  // הנחה שפונקציית הסכום יוצאת מנקודת הכניסה של הסקריפט

describe('Calculator functionality', () => {
  test('correctly calculates the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('returns zero when both inputs are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('handles negative numbers', () => {
    expect(sum(-1, -1)).toBe(-2);
  });
});
