import './create-upload-photo';

const formBlock = document.querySelector('.img-upload__form');
const hashtag = formBlock.querySelector('.text__hashtags');
const comment = formBlock.querySelector('.text__description');

const maxHashtag = 5;
const maxCharactersComments = 140;

const pristine = new Pristine(formBlock, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const reghashtag = /^#[a-zа-яё0-9]{1,19}$|^$/i;

const validateHashtagCorrect = (values) => {
  let flag = true;
  for (const value of values.trim().split(' ')) {
    flag = reghashtag.test(value);
  }
  return flag;
};

const validateHashtagCount = (values) => values.split(' ').length <= maxHashtag;

const validateHashtagRepeat = (values) => {
  const arrayHashtags = values.toUpperCase().split(' ');
  const duplicates = arrayHashtags.filter((elem, index, array) => array.indexOf(elem) !== index);
  return duplicates.length === 0;
};

const validateCommentLenght = (values) => values.length < maxCharactersComments;


pristine.addValidator(hashtag, validateHashtagCount, 'Максимальное количество хештегов: 5');

pristine.addValidator(hashtag, validateHashtagCorrect, 'Введен невалидный хештег');

pristine.addValidator(hashtag, validateHashtagRepeat, 'Хештеги не должны повторяться');

pristine.addValidator(comment, validateCommentLenght, 'Максимальное количество символов в комментарии: 140');

const setUserFormSubmit = () => {
  formBlock.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // const formData = new FormData(evt.target);
    // fetch('https://31.javascript.htmlacademy.pro/kekstagram',
    //   {
    //     method: 'POST',
    //     body: formData,
    //   },
    // )

    const isValid = pristine.validate();
    if (isValid) {


      const formData = new FormData(evt.target);
      fetch('https://31.javascript.htmlacademy.pro/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      ) .then((response) => {
        if (response.ok) {
          console.log('Не удалось отправить форму. Попробуйте ещё раз12');
          // onSuccess();

        } else {
          console.log('Не удалось отправить форму. Попробуйте ещё раз1');
        }
      }).catch(() => {
        console.log('Не удалось отправить форму. Попробуйте ещё раз');
      });
}})};


export {setUserFormSubmit};
