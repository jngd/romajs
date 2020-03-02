const ROMAN_SYMBOLS = {};

function convertStringFromArabicToRoman(value) {}

function convertStringFromArabicToRoman(value) {}

function convertStringFromArabicToRoman(value) {}

export default function(value) {
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
