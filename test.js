const RomanNumber = require('./roma');

describe('Roman to arabic', () => {
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

  test('Case CDXXIX', () => {
    expect(RomanNumber('CDXXIX')).toBe(429);
  });

  test('Case CD1X', () => {
    expect(() => RomanNumber('CD1X')).toThrow(Error);
  });
});

describe('Arabic to roman', () => {
  test('Case 0', () => {
    expect(() => new RomanNumber(0)).toThrow(Error);
  });

  test('Case 1', () => {
    expect(RomanNumber(1)).toBe('I');
  });

  test('Case 1 string', () => {
    expect(RomanNumber('1')).toBe('I');
  });
  test('Case 3', () => {
    expect(RomanNumber(3)).toBe('III');
  });

  test('Case 4', () => {
    expect(RomanNumber(4)).toBe('IV');
  });

  test('Case 5', () => {
    expect(RomanNumber(5)).toBe('V');
  });
  test('Case 1968', () => {
    expect(RomanNumber(1968)).toBe('MCMLXVIII');
  });

  test('Case 1474', () => {
    expect(RomanNumber(1474)).toBe('MCDLXXIV');
  });

  test('Case 2999', () => {
    expect(RomanNumber(2999)).toBe('MMCMXCIX');
  });

  test('Case 3000', () => {
    expect(RomanNumber(3000)).toBe('MMM');
  });

  test('Case 10000', () => {
    expect(() => RomanNumber(10000)).toThrow(Error);
  });
});

describe('Preconditions', () => {
  test('Case null', () => {
    expect(() => RomanNumber(null)).toThrow(Error);
  });

  test('Case ‘error’', () => {
    expect(() => RomanNumber('error')).toThrow(Error);
  });
});
