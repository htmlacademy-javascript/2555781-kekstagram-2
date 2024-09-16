const scaleContainerElement = document.querySelector('.img-upload__overlay');
const photoElement = document.querySelector('.img-upload__preview img');
const scaleValueElement = scaleContainerElement.querySelector('.scale__control--value');
const scaleSmallerButtonElement = scaleContainerElement.querySelector('.scale__control--smaller');
const scaleBiggerButtonElement = scaleContainerElement.querySelector('.scale__control--bigger');

const SCALE_SETTINGS = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DIVIDER: 100,
};

let currentScale = SCALE_SETTINGS.MAX;

const updatePhotoScale = (scaleValue) => {
  photoElement.style.transform = `scale(${scaleValue / SCALE_SETTINGS.DIVIDER})`;
  scaleValueElement.value = `${scaleValue}%`;
};

const onScaleBiggerButtonClick = () => {
  if (currentScale < SCALE_SETTINGS.MAX) {
    currentScale += SCALE_SETTINGS.STEP;
    updatePhotoScale(currentScale);
  }
};

const onScaleSmallerButtonClick = () => {
  if (currentScale > SCALE_SETTINGS.MIN) {
    currentScale -= SCALE_SETTINGS.STEP;
    updatePhotoScale(currentScale);
  }
};

const updateCurrentScale = () => {
  currentScale = SCALE_SETTINGS.MAX;
  photoElement.style.transform = `scale(${currentScale / SCALE_SETTINGS.DIVIDER})`;
};

scaleBiggerButtonElement.addEventListener('click', onScaleBiggerButtonClick);
scaleSmallerButtonElement.addEventListener('click', onScaleSmallerButtonClick);

export {updatePhotoScale, updateCurrentScale};
