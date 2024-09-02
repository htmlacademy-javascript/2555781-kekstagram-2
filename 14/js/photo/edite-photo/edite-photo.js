import { onPhotoScaleChange} from './scale';
import { onPhotoSliderChange } from './nouislider';

const scalePhoto = document.querySelector('.img-upload__overlay');
const buttonScaleSmaller = scalePhoto.querySelector('.scale__control--smaller');
const buttonScaleBigger = scalePhoto.querySelector('.scale__control--bigger');
const effectListItems = document.querySelectorAll('.effects__radio');

const buttonsScalePhoto = [buttonScaleSmaller, buttonScaleBigger];

buttonsScalePhoto.forEach((elem) => {
  elem.addEventListener('click', onPhotoScaleChange);
});

effectListItems.forEach((elem) => {
  elem.addEventListener('change', onPhotoSliderChange);
});
