import { isEscapeKey } from '../util';

const formBlock = document.querySelector('.img-upload__form');
const elementUploadPhoto = formBlock.querySelector('.img-upload__input');
const elementEditePhoto = formBlock.querySelector('.img-upload__overlay');
const buttonClose = formBlock.querySelector('.img-upload__cancel');
const fieldComments = formBlock.querySelector('.text__description');
const fieldHashtag = formBlock.querySelector('.text__hashtags');


const onbuttonClose = () => {
  elementEditePhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formBlock.reset();
};

const onEscapeClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onbuttonClose();
  }
};

const onButtonLoader = () => {
  elementEditePhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  buttonClose.addEventListener('click', onbuttonClose);
  document.addEventListener('keydown', onEscapeClose);
};


const fields = [fieldComments, fieldHashtag];

fields.forEach((field) => {
  field.addEventListener('focus',() => {
    document.removeEventListener('keydown', onEscapeClose);
  });
  field.addEventListener('blur',() => {
    document.addEventListener('keydown', onEscapeClose);
  });
});


elementUploadPhoto.addEventListener('change', onButtonLoader);

