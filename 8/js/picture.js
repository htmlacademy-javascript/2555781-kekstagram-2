import {getDescriptionPhoto} from './create-description-photo.js';

const picturesList = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const descriptionPhoto = getDescriptionPhoto();

descriptionPhoto.forEach(({url, description, likes, comments}) => {
  const item = templatePicture.cloneNode(true);
  item.querySelector('.picture__img').src = url;
  item.querySelector('.picture__img').alt = description;
  item.querySelector('.picture__likes').textContent = likes;
  item.querySelector('.picture__comments').textContent = Object.keys(comments).length;
  picturesList.append(item);
});
