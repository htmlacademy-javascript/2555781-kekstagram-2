// Функция для проверки длины строки.
// Принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
// если строка меньше или равна указанной длине, и false, если строка длиннее

const checkStringLength = (string, maxLength) => string.length <= maxLength;

// Строка короче 20 символов
//console.log(checkStringLength('проверяемая строка', 20)); // true

// Длина строки ровно 18 символов
//console.log(checkStringLength('проверяемая строка', 18)); // true

// Строка длиннее 10 символов
//console.log(checkStringLength('проверяемая строка', 10)); // false

// Функция для проверки, является ли строка палиндромом.

const checkPalindrome = (string) => {
  const normalized = string.replaceAll(' ', '').toUpperCase();
  let result = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    result += normalized[i];
  }
  return result === normalized;
};

// Строка является палиндромом
//console.log(checkPalindrome('топот')); // true

// Несмотря на разный регистр, тоже палиндром
//console.log(checkPalindrome('ДовОд')); // true

// Это не палиндром
//console.log(checkPalindrome('Кекс')); // false

// Это палиндром
//console.log(checkPalindrome('Лёша на полке клопа нашёл ')); // true

// Дополнительное задание
// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN

const getNumber = (string) => {
  string = String(string).replaceAll(' ', '');
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(+string[i])) {
      result += string[i];
    }
  }
  if (result === '') {
    return NaN;
  }
  return +result;
};

//console.log(getNumber('ECMAScript 2022')); // 2022
//console.log(getNumber('1 кефир, 0.5 батона')); // 105
//console.log(getNumber('агент 007')); // 7
//console.log(getNumber('а я томат')); // NaN
//console.log(getNumber(2023)); // 2023
//console.log(getNumber(-1)); // 1
//console.log(getNumber(1.5)); // 15
