import {PHOTO_COMMENTS, NAMES_USER} from './data.js';
import {getRandomInteger, createRandomIdFromRangeGenerator} from './util.js';

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

export {createComments};
