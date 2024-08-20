import {getRandomInteger, createRandomIdFromRangeGenerator} from './util.js';
import {PHOTO_DESCRIPTIONS} from './data.js';
import {createComments} from './create-comments.js';

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


const getDescriptionPhoto = () => Array.from({length: 25}, createDescriptionPhoto);

export {getDescriptionPhoto, generatePhotoId};
