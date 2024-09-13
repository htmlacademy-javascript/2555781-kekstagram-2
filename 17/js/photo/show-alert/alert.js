import { isEscapeKey } from '../../util';
import { closeEditPhotoOverlay, onEscapeKeyCloseOverlay } from '../../validation/photo-edit-overlay';

const templateAlertErrorElement = document.querySelector('#error').content.querySelector('.error');
const templateAlertSuccessElement = document.querySelector('#success').content.querySelector('.success');
const templateAlertElement = document.querySelector('#data-error').content.querySelector('.data-error');
const ALERT_SHOW_TIME = 5000;

const closeAlert = (buttonElement, innerElement, containerElement) => {
  const onOutsideClick = (evt) => {
    if (!innerElement.contains(evt.target)) {
      onAlertContainerClose();
    }
  };

  const onEscapeKeyPress = (evt) => {
    if (isEscapeKey) {
      evt.preventDefault();
      onAlertContainerClose();
    }
  };

  function onAlertContainerClose () {
    containerElement.remove();
    document.removeEventListener('keydown', onEscapeKeyPress);
    document.removeEventListener('click', onOutsideClick);
    document.addEventListener('keydown', onEscapeKeyCloseOverlay);
  }

  buttonElement.addEventListener('click', onAlertContainerClose);
  document.addEventListener('keydown', onEscapeKeyPress);
  document.addEventListener('click', onOutsideClick);
};

const showAlertError = () => {
  document.removeEventListener('keydown', onEscapeKeyCloseOverlay);

  const errorContainer = templateAlertErrorElement.cloneNode(true);
  document.body.append(errorContainer);

  const errorButton = errorContainer.querySelector('.error__button');
  const errorInner = errorContainer.querySelector('.error__inner');

  closeAlert(errorButton, errorInner, errorContainer);
};


const showAlertSuccess = () => {
  closeEditPhotoOverlay();

  const successContainer = templateAlertSuccessElement.cloneNode(true);
  document.body.append(successContainer);

  const successButton = successContainer.querySelector('.success__button');
  const successInner = successContainer.querySelector('.success__inner');

  closeAlert(successButton, successInner, successContainer);
};


const showAlertDowload = () => {
  const alertContainer = templateAlertElement.cloneNode(true);
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export {showAlertError, showAlertSuccess, showAlertDowload};
