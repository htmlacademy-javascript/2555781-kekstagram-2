import { shuffle, debounce } from '../util.js';
import { renderPhotoDescriptions } from '../photo/photo.js';

const filtersElement = document.querySelector('.img-filters');
const filterDefaultElement = document.querySelector('#filter-default');
const filterRandomElement = document.querySelector('#filter-random');
const filterDiscussedElement = document.querySelector('#filter-discussed');
const timeoutDelay = 500;
const countRandomPhoto = 10;

const removeActiveClassFromButtons = () => {
  const filterButtons = document.querySelectorAll('.img-filters__button');
  filterButtons.forEach((buttonElement) => {
    buttonElement.classList.remove('img-filters__button--active');
  });
};

const showFilterContainer = () => {
  filtersElement.classList.remove('img-filters--inactive');
};

const clearAddedPhotos = () => {
  const addedPhotoElements = document.querySelectorAll('a.picture');
  addedPhotoElements.forEach((photoElement) => photoElement.remove());
};

const debouncedCreatePhoto = debounce((data) => {
  clearAddedPhotos();
  renderPhotoDescriptions(data);
}, timeoutDelay);

const updatePhotoDisplay = (photosArray, buttonElement) => {
  removeActiveClassFromButtons();
  debouncedCreatePhoto(photosArray);
  buttonElement.classList.add('img-filters__button--active');
};

const showfilterRandom = (photosArray, buttonElement) => {
  const shuffledArray = photosArray.slice();
  shuffle(shuffledArray);
  const randomPhotos = shuffledArray.slice(0, countRandomPhoto);
  updatePhotoDisplay(randomPhotos, buttonElement);

};

const showfilterDiscussed = (photosArray, buttonElement) => {
  const discussedPhotos = photosArray.slice().sort((a, b) => b.comments.length - a.comments.length);
  updatePhotoDisplay(discussedPhotos, buttonElement);
};


const showfilterDefault = (photosArray, buttonElement) => {
  updatePhotoDisplay(photosArray, buttonElement);
};

const filterPhotos = (data) => {
  const defaultPhotosArray = data;

  filterDefaultElement.addEventListener('click', () => {
    showfilterDefault(defaultPhotosArray, filterDefaultElement);
  });
  filterRandomElement.addEventListener('click', () => {
    showfilterRandom(defaultPhotosArray, filterRandomElement);
  }
  );
  filterDiscussedElement.addEventListener('click', () => {
    showfilterDiscussed(defaultPhotosArray, filterDiscussedElement);
  }
  );
};

export {showFilterContainer, filterPhotos};
