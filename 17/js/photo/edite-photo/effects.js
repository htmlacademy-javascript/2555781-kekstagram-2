import './scale.js';
import { onSliderChange } from './nouislider.js';

const effectRadioElements = document.querySelectorAll('.effects__radio');

effectRadioElements.forEach((radioElement) => {
  radioElement.addEventListener('change', onSliderChange);
});
