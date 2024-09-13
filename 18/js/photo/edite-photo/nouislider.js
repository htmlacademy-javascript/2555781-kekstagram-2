import { SLIDER_SETTINGS } from './slider-settings.js';

const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const targetPhotoElement = document.querySelector('.img-upload__preview img');
const calculatedValueSliderElement = sliderContainerElement.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const resetSliderToDefault = () => {
  sliderContainerElement.classList.add('hidden');
  targetPhotoElement.style.filter = 'none';
};


const onSliderChange = (evt) => {
  const effectId = evt.target.id;
  const effectSettings = SLIDER_SETTINGS[effectId];

  if (effectId === 'effect-none') {
    resetSliderToDefault();
    return;
  }

  sliderContainerElement.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effectSettings.minValue,
      max: effectSettings.maxValue,
    },
    start: effectSettings.maxValue,
    step: effectSettings.step
  });

  sliderElement.noUiSlider.on('update', () => {
    const sliderValue = sliderElement.noUiSlider.get();
    targetPhotoElement.style.filter = `${effectSettings.name}(${sliderValue}${effectSettings.unit})`;
    calculatedValueSliderElement.setAttribute('value', sliderValue);
  });

};

export {onSliderChange, resetSliderToDefault};
