const RomanNumber = require('./roma');

test('Case null', () => {
  expect(() => RomanNumber(null)).toThrow(Error);
});

test('Case 0', () => {
  expect(() => new RomanNumber(0)).toThrow(Error);
});

test('Case 1', () => {
  expect(RomanNumber(1)).toBe('I');
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
  expect(RomanNumber('I')).toBe(1);
});

test('Case III', () => {
  expect(RomanNumber('III')).toBe(3);
});

test('Case IIII', () => {
  expect(() => RomanNumber('IIII')).toThrow(Error);
});

test('Case IV', () => {
  expect(RomanNumber('IV')).toBe(4);
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
  expect(RomanNumber('CDXXIX')).toBe(429);
});

test('Case CD1X', () => {
  expect(() => RomanNumber('CD1X')).toThrow(Error);
});

test('Case ‘error’', () => {
  expect(() => RomanNumber('error')).toThrow(Error);
});

test('Case MCDLXXXII', () => {
  expect(RomanNumber('MCDLXXXII')).toBe(1482);
});

test('Case MCMLXXX', () => {
  expect(RomanNumber('MCMLXXX')).toBe(1980);
});

test('Case MMMMCMXCIX', () => {
  expect(() => RomanNumber('MMMMCMXCIX')).toThrow(Error);
});

test('Case MMMMDMXCIX', () => {
  expect(() => RomanNumber('MMMMDMXCIX')).toThrow(Error);
});
