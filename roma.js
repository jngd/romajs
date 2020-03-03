const ROMAN_SYMBOLS = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
const ARABIC_VALUES = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

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

// pre - value is a number
function arabicNumberToRoman(value) {
  console.log('[Romajs] arabicNumberToRoman value', value);

  let result = '';

  if (isNaN(value)) {
    console.log('[Romajs] arabicNumberToRoman value', value);
    throw new Error('invalid value');
  }

  if (value === 0) {
    return '';
  }

  for (let i = 0; i < ARABIC_VALUES.length; i++) {
    while (value >= ARABIC_VALUES[i][0]) {
      result += ARABIC_VALUES[i][1];
      value -= ARABIC_VALUES[i][0];
    }
  }

  return result;
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

  if (value == 0) {
    console.log('[Romajs] convertNumberFromRomanToArabic: Zero found, return empty string');
    return '';
  }

  if (!value) {
    console.log('[Romajs] convertNumberFromRomanToArabic: No value available');
    throw new Error('value required');
  }

  if (value < 1 || value > 3999) {
    console.log('[Romajs] convertNumberFromRomanToArabic: No value available');
    throw new Error('invalid range');
  }

  return arabicNumberToRoman(value);
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
      return convertNumberFromRomanToArabic(parseInt(value));
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
