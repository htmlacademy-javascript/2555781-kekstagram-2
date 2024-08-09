const PHOTO_DESCRIPTIONS = [
  'Закат на берегу моря',
  'Уютное утро с чашкой кофе',
  'Прогулка по осеннему парку',
  'Вид на город с высоты',
  'Сочное летнее манго',
  'Ночной свет звезд',
  'Солнечные лучи в лесу',
  'Тихая гавань у моря',
  'Уличное искусство в центре города',
  'Вечер с любимой книгой',
];

const PHOTO_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES_USER = [
  'Александр',
  'Мария',
  'Дмитрий',
  'Анна',
  'Иван',
  'Екатерина',
  'Сергей',
  'Ольга',
  'Андрей',
  'Наталья'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const createComments = () => {
  const commentsUser = [];
  const idUser = createRandomIdFromRangeGenerator(1, 1000);
  for (let i = 0; i <= getRandomInteger(1, 30); i++) {
    const comment = {id: idUser(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: PHOTO_COMMENTS[getRandomInteger(0, PHOTO_COMMENTS.length - 1)],
      name: NAMES_USER[getRandomInteger(0, NAMES_USER.length - 1)]
    };
    commentsUser.push(comment);
  }

  return commentsUser;
};

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generatePhotoUrl = createRandomIdFromRangeGenerator(1, 25);
const generatePhotoLikes = createRandomIdFromRangeGenerator(15, 200);

const createDescriptionPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: PHOTO_DESCRIPTIONS[getRandomInteger(0, PHOTO_DESCRIPTIONS.length - 1)],
  likes: generatePhotoLikes(),
  comments: createComments(),
});

const descriptionPhoto = Array.from({length: 25}, createDescriptionPhoto);

descriptionPhoto();
//console.log(descriptionPhoto);
