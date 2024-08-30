import {descriptionPhoto} from './create-description-photo';

const picturesList = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

descriptionPhoto.forEach(({id, url, description, likes, comments}) => {
  const item = templatePicture.cloneNode(true);
  const elementImage = item.querySelector('.picture__img');
  const elementLikes = item.querySelector('.picture__likes');
  const elementComments = item.querySelector('.picture__comments');

  elementLikes.textContent = likes;
  elementComments.textContent = Object.keys(comments).length;
  elementImage.src = url;
  elementImage.alt = description;
  elementImage.dataset.id = id;
  picturesList.append(item);
});
