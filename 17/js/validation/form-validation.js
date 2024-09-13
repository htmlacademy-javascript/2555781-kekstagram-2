import './photo-edit-overlay.js';
import { blockSubmitButton, unblockSubmitButton } from '../photo/edite-photo/submit-button.js';
import { sendData } from '../api.js';

const formElement = document.querySelector('.img-upload__form');
const hashtagFieldElement = formElement.querySelector('.text__hashtags');
const commentFieldElement = formElement.querySelector('.text__description');

const MAX_HASHTAGS = 5;
const MAX_COMMENT_LENGTH = 140;

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const reghashtag = /^#[a-zа-яё0-9]{1,19}$|^$/i;

const validateHashtags = (values) => {
  let flag = true;
  for (const value of values.trim().split(' ')) {
    flag = reghashtag.test(value);
  }
  return flag;
};

const validateHashtagCount = (values) => {
  const hashtags = values.split(/\s+/).filter((tag) => tag.trim().length > 0);
  return hashtags.length <= MAX_HASHTAGS;
};

const isAllSpaces = (values) => {
  const validPattern = /^(?![\s]*$).*|^$/;
  return validPattern.test(values);
};

const validateHashtagRepeat = (values) => {
  const arrayHashtags = values.toUpperCase().split(/\s+/).filter((tag) => tag.trim().length > 0);
  const duplicates = arrayHashtags.filter((elem, index, array) => array.indexOf(elem) !== index);
  return duplicates.length === 0;
};

const validateCommentLenght = (values) => values.length < MAX_COMMENT_LENGTH;


pristine.addValidator(commentFieldElement, validateCommentLenght, 'Максимальное количество символов в комментарии: 140');
pristine.addValidator(hashtagFieldElement, isAllSpaces, 'Строка не может быть только из пробелов');
pristine.addValidator(hashtagFieldElement, validateHashtagCount, 'Максимальное количество хештегов: 5');
pristine.addValidator(hashtagFieldElement, validateHashtagRepeat, 'Хештеги не должны повторяться');
pristine.addValidator(hashtagFieldElement, validateHashtags, 'Введен невалидный хештег');


const setUserFormSubmit = (onSuccess, onError) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(onError)
        .finally(unblockSubmitButton);
    }
  });
};

export {setUserFormSubmit, pristine};
