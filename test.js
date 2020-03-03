const RomanNumber = require('./roma');

test('Case null', () => {
  expect(new RomanNumber()).toBe();
});

test('Case 0', () => {
  expect(new RomanNumber()).toBe();
});

test('Case 1', () => {
  expect(new RomanNumber()).toBe();
});

test('Case 3', () => {
  expect(new RomanNumber()).toBe();
});

test('Case 4', () => {
  expect(new RomanNumber()).toBe();
});

test('Case 5', () => {
  expect(new RomanNumber()).toBe();
});

test('Case I', () => {
  expect(new RomanNumber()).toBe();
});

test('Case III', () => {
  expect(new RomanNumber()).toBe();
});

test('Case IIII', () => {
  expect(new RomanNumber()).toBe();
});

test('Case IV', () => {
  expect(new RomanNumber()).toBe();
});

test('Case 1968', () => {
  expect(new RomanNumber()).toBe();
});

test('Case 1474', () => {
  expect(new RomanNumber()).toBe();
});

test('Case 2999', () => {
  expect(new RomanNumber()).toBe();
});

test('Case 3000', () => {
  expect(new RomanNumber()).toBe();
});

test('Case 10000', () => {
  expect(new RomanNumber()).toBe();
});

test('Case CDXXIX', () => {
  expect(new RomanNumber()).toBe();
});

test('Case CD1X', () => {
  expect(new RomanNumber()).toBe();
});

test('Case ‘error’', () => {
  expect(new RomanNumber()).toBe();
});

test('Case MCDLXXXII', () => {
  expect(new RomanNumber()).toBe();
});

test('Case MCMLXXX', () => {
  expect(new RomanNumber()).toBe();
});

test('Case MMMMCMXCIX', () => {
  expect(new RomanNumber()).toBe();
});

test('Case MMMMDMXCIX', () => {
  expect(new RomanNumber()).toBe();
});
