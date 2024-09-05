import './scale';
import { onPhotoSliderChange } from './nouislider';

const effectListItems = document.querySelectorAll('.effects__radio');

effectListItems.forEach((elem) => {
  elem.addEventListener('change', onPhotoSliderChange);
});
