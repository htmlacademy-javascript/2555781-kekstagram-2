import { createTemplateComments } from '../comments/create-template-comments';
import { isEscapeKey } from '../util';

const body = document.querySelector('body');
const bigPhotoBlock = document.querySelector('.big-picture');
const bigPhotoImage = bigPhotoBlock.querySelector('img');
const likesCount = bigPhotoBlock.querySelector('.likes-count');
const socialComments = bigPhotoBlock.querySelector('.social__comments');
const commentsTotalCount = bigPhotoBlock.querySelector('.social__comment-total-count');
const commentsShowCount = bigPhotoBlock.querySelector('.social__comment-shown-count');
const socialCaption = bigPhotoBlock.querySelector('.social__caption');
const buttonCommentsLoader = bigPhotoBlock.querySelector('.comments-loader');

const stepLoadingComments = 5;
let indexLoadingComments = 0;

let allComments = [];

const onButtonCommentsLoader = () => {
  allComments.slice(indexLoadingComments, indexLoadingComments + stepLoadingComments).forEach((element) => {
    socialComments.append(createTemplateComments(element));
    commentsShowCount.textContent = socialComments.children.length;
    if (indexLoadingComments >= (allComments.length - stepLoadingComments) || allComments.length <= 5) {
      buttonCommentsLoader.classList.add('hidden');
      indexLoadingComments = 0;
    }
  });
  indexLoadingComments += stepLoadingComments;
};

const createBigPhoto = ({url, description, likes,comments}) => {
  allComments = comments;
  bigPhotoImage.src = url;
  bigPhotoImage.alt = description;
  socialCaption.textContent = description;
  likesCount.textContent = likes;
  commentsTotalCount.textContent = comments.length;
  onButtonCommentsLoader();

};

buttonCommentsLoader.addEventListener('click', onButtonCommentsLoader);

const onBigPhotoEscKeydownClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function closeBigPhoto (){
  bigPhotoBlock.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onBigPhotoEscKeydownClose);
  indexLoadingComments = 0;
  socialComments.innerHTML = '';
  buttonCommentsLoader.classList.remove('hidden');
}

export {createBigPhoto, indexLoadingComments, closeBigPhoto, onBigPhotoEscKeydownClose };

