// Функция для проверки длины строки

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом.

const checkPalindrome = (string) => {
  const normalized = string.replaceAll(' ', '').toUpperCase();
  let result = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    result += normalized[i];
  }
  return result === normalized;
};

checkPalindrome('топот');

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

getNumber('ECMAScript 2022');

// функция, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах
// и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

const convertTimeMinutes = (time) => {
  const timeArr = time.split(':').map((element) => Number(element));
  return timeArr[0] * 60 + timeArr[1];
};

const checkCorrectTime = (startDay, endDay, startMeet, time) => {
  const startDayMinutes = convertTimeMinutes(startDay);
  const endDayMinutes = convertTimeMinutes(endDay);
  const startMeetMinutes = convertTimeMinutes(startMeet);

  return startDayMinutes <= startMeetMinutes && (startMeetMinutes + time) <= endDayMinutes;

};


// eslint-disable-next-line no-console
console.log(checkCorrectTime('08:00', '17:30', '14:00', 90)); // true
// eslint-disable-next-line no-console
console.log(checkCorrectTime('8:0', '10:0', '8:0', 120)); // true
// eslint-disable-next-line no-console
console.log(checkCorrectTime('08:00', '14:30', '14:00', 90)); // false
// eslint-disable-next-line no-console
console.log(checkCorrectTime('14:00', '17:30', '08:0', 90)); // false
// eslint-disable-next-line no-console
console.log(checkCorrectTime('8:00', '17:30', '08:00', 900)); // false
