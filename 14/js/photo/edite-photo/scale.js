const scalePhoto = document.querySelector('.img-upload__overlay');
const photoScale = document.querySelector('.img-upload__preview img');
const valueScalePhoto = scalePhoto.querySelector('.scale__control--value');
const buttonScaleSmaller = scalePhoto.querySelector('.scale__control--smaller');
const buttonScaleBigger = scalePhoto.querySelector('.scale__control--bigger');

const scaleSettings = {
  step: 25,
  min: 25,
  max: 100,
};

valueScalePhoto.disabled = true;

const onPhotoScaleChange = (evt) => {
  const {step, min, max} = scaleSettings;

  const button = evt.target;

  let calculatedScale = Number(valueScalePhoto.value.slice(0, -1));

  if (button === buttonScaleBigger && calculatedScale < max) {
    calculatedScale += step;
  } else if (button === buttonScaleSmaller && calculatedScale > min) {
    calculatedScale -= step;
  }

  valueScalePhoto.setAttribute('value', `${calculatedScale}%`);
  photoScale.style.transform = `scale(${calculatedScale / 100})`;
};

export {onPhotoScaleChange};
