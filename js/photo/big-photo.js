import { renderComment } from '../comments/comments.js';
import { isEscapeKey } from '../util.js';

const STEP_LOADING_COMMENTS = 5;

const bodyElement = document.querySelector('body');
const bigPhotoBlockElement = document.querySelector('.big-picture');
const bigPhotoImageElement = bigPhotoBlockElement.querySelector('img');
const likesCountElement = bigPhotoBlockElement.querySelector('.likes-count');
const socialCommentsElement = bigPhotoBlockElement.querySelector('.social__comments');
const commentsTotalCountElement = bigPhotoBlockElement.querySelector('.social__comment-total-count');
const commentsShowCountElement = bigPhotoBlockElement.querySelector('.social__comment-shown-count');
const socialCaptionElement = bigPhotoBlockElement.querySelector('.social__caption');
const buttonCommentsLoaderElement = bigPhotoBlockElement.querySelector('.comments-loader');

let indexLoadingComments = 0;

let allComments = [];

const onLoadMoreComments = () => {
  allComments.slice(indexLoadingComments, indexLoadingComments + STEP_LOADING_COMMENTS).forEach((element) => {
    socialCommentsElement.append(renderComment(element));
    commentsShowCountElement.textContent = socialCommentsElement.children.length;
    if (indexLoadingComments >= (allComments.length - STEP_LOADING_COMMENTS) || allComments.length <= 5) {
      buttonCommentsLoaderElement.classList.add('hidden');
      indexLoadingComments = 0;
    }
  });
  indexLoadingComments += STEP_LOADING_COMMENTS;
};

const displayBigPhoto = ({url, description, likes,comments}) => {
  allComments = comments;
  bigPhotoImageElement.src = url;
  bigPhotoImageElement.alt = description;
  socialCaptionElement.textContent = description;
  likesCountElement.textContent = likes;
  commentsTotalCountElement.textContent = comments.length;
  onLoadMoreComments();
};

const onBigPhotoEscKeydownClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function closeBigPhoto (){
  bigPhotoBlockElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPhotoEscKeydownClose);
  indexLoadingComments = 0;
  socialCommentsElement.innerHTML = '';
  buttonCommentsLoaderElement.classList.remove('hidden');
}

buttonCommentsLoaderElement.addEventListener('click', onLoadMoreComments);

export {displayBigPhoto, closeBigPhoto, onBigPhotoEscKeydownClose };

