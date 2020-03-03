const ROMAN_SYMBOLS = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

function convertStringFromArabicToRoman(value) {
  console.log('[Romajs] convertStringFromArabicToRoman value', value);

  if (!value) {
    console.log('[Romajs] convertStringFromArabicToRoman: No value available');
    throw new Error('value required');
  }
}

function romanArrayToArabic(arr, index, sum) {
  const current = arr[index];
  const next = arr[index + 1] || null;

  if (current === arr[index - 1] && current === arr[index - 2] && current === arr[index - 3]) {
    throw new Error('invalid value');
  }

  next && ROMAN_SYMBOLS[current] < ROMAN_SYMBOLS[next]
    ? (sum -= ROMAN_SYMBOLS[current])
    : (sum += ROMAN_SYMBOLS[current]);

  if (index === 0) {
    return sum;
  }

  return romanArrayToArabic(arr, index - 1, sum);
}

function convertStringFromRomanToArabic(value) {
  console.log('[Romajs] convertStringFromRomanToArabic value', value);

  if (!value) {
    console.log('[Romajs] convertStringFromRomanToArabic: No value available');
    throw new Error('value required');
  }

  if (typeof value != 'string') {
    console.log('[Romajs] convertStringFromRomanToArabic: Value must be an string');
    return;
  }

  const romanArray = value.split('');

  return romanArrayToArabic(romanArray, romanArray.length - 1, 0);
}

function convertNumberFromRomanToArabic(value) {
  console.log('[Romajs] convertNumberFromRomanToArabic value', value);

  if (!value) {
    console.log('[Romajs] convertNumberFromRomanToArabic: No value available');
    throw new Error('value required');
  }

  if (value < 1 || value > 3999) {
    console.log('[Romajs] convertNumberFromRomanToArabic: No value available');
    throw new Error('invalid range');
  }
}

function RomanNumber(value) {
  console.log('[Romajs] value', value);

  if (!value) {
    console.log('[Romajs] No value available');
    throw new Error('value required');
  }

  switch (true) {
    case typeof value == 'string' && /^\-?[0-9]*$/.test(value):
      console.log('[Romajs] Detected number [string] in arabic format');
      return convertStringFromArabicToRoman(value);
    case typeof value == 'string' && /^([M|D|C|L|X|V|I])*$/.test(value):
      console.log('[Romajs] Detected number [string] in roman format');
      return convertStringFromRomanToArabic(value);
    case typeof value == 'number':
      console.log('[Romajs] Detected number in arabic format');
      return convertNumberFromRomanToArabic(value);
    default:
      throw new Error('invalid value');
  }
}

module.exports = (value) => RomanNumber(value);
