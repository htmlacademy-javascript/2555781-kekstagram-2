import {displayBigPhoto, onBigPhotoEscKeydownClose, closeBigPhoto} from './big-photo.js';

const bigPhotoBlockElement = document.querySelector('.big-picture');
const pictureCollectionElement = document.querySelector('.pictures');
const bodyElement = document.querySelector('body');

const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const buttonCloseElement = bigPhotoBlockElement.querySelector('.cancel');

sliderContainerElement.classList.add('hidden');

const openPhotoGallery = (photoData) => {
  pictureCollectionElement.addEventListener('click', (evt) => {
    const pictureElement = evt.target.closest('.picture');
    if (pictureElement) {
      const photoId = pictureElement.querySelector('.picture__img').dataset.id;
      const photoObject = photoData.find((item) => photoId === String(item.id));
      bigPhotoBlockElement.classList.remove('hidden');
      displayBigPhoto(photoObject);
      bodyElement.classList.add('modal-open');
      buttonCloseElement.addEventListener('click', closeBigPhoto);
      document.addEventListener('keydown', onBigPhotoEscKeydownClose);
    }
  });
};

export {openPhotoGallery};
