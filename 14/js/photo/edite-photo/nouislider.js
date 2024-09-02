import { sliderSetting } from './data-filter';

const sliderElement = document.querySelector('.effect-level__slider');
const sliderConteiner = document.querySelector('.img-upload__effect-level');
const targetPhoto = document.querySelector('.img-upload__preview img');
const calculatedValueSlider = sliderConteiner.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  connect: 'lower',
});

const onPhotoSliderChange = (evt) => {
  const idEffect = evt.target.id;
  const effect = sliderSetting[idEffect];

  sliderConteiner.classList.remove('hidden');

  if (idEffect === 'effect-none') {
    sliderConteiner.classList.add('hidden');
    targetPhoto.style.filter = 'none';
    return;
  }

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effect.minValue,
      max: effect.maxValue,
    },
    start: effect.maxValue,
    step: effect.step
  });

  sliderElement.noUiSlider.on('update', () => {
    const valueSlider = sliderElement.noUiSlider.get();
    targetPhoto.style.filter = `${effect.name}(${valueSlider}${effect.unit})`;
    calculatedValueSlider.setAttribute('value', valueSlider);
  });

};

export {onPhotoSliderChange};
