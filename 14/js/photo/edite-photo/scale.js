const scalePhoto = document.querySelector('.img-upload__overlay');
const photoScale = document.querySelector('.img-upload__preview img');
const valueScalePhoto = scalePhoto.querySelector('.scale__control--value');
const buttonScaleSmaller = scalePhoto.querySelector('.scale__control--smaller');
const buttonScaleBigger = scalePhoto.querySelector('.scale__control--bigger');

const ScaleSettings = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DIVIDER: 100,
};

valueScalePhoto.disabled = true;

let calculatedScale = ScaleSettings.MAX;

const updateScalePhoto = (value) => {
  photoScale.style.transform = `scale(${value / ScaleSettings.DIVIDER})`;
  valueScalePhoto.setAttribute('value', `${calculatedScale}%`);
};

buttonScaleBigger.addEventListener('click', () => {
  if (calculatedScale < ScaleSettings.MAX) {
    calculatedScale += ScaleSettings.STEP;
    updateScalePhoto(calculatedScale);
  }
});

buttonScaleSmaller.addEventListener('click', () => {
  if (calculatedScale > ScaleSettings.MIN) {

    calculatedScale -= ScaleSettings.STEP;
    updateScalePhoto(calculatedScale);
  }
});

export {updateScalePhoto};
