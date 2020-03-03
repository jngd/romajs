const ROMAN_SYMBOLS = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

function convertStringFromArabicToRoman(value) {
  console.log('[Romajs] convertStringFromArabicToRoman value', value);

  if (!value) {
    console.log('[Romajs] convertStringFromArabicToRoman: No value available');
    throw new Error('value required');
  }
}

function convertStringFromRomanToArabic(value) {
  console.log('[Romajs] convertStringFromRomanToArabic value', value);

  if (!value) {
    console.log('[Romajs] convertStringFromRomanToArabic: No value available');
    throw new Error('value required');
  }
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

module.exports = RomanNumber;
