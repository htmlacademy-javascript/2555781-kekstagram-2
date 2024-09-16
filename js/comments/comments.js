const socialCommentsElement = document.querySelector('.social__comments');
const sizePhoto = 35;

socialCommentsElement.innerHTML = '';

const renderComment = ({avatar, name, message}) => {
  const commentElement = document.createElement('li');
  const textElement = document.createElement('p');
  const imageElement = new Image(sizePhoto, sizePhoto);

  commentElement.classList.add('social__comment');
  textElement.classList.add('social__text');
  imageElement.classList.add('social__picture');

  imageElement.src = avatar;
  imageElement.alt = name;
  textElement.textContent = message;

  commentElement.append(imageElement);
  commentElement.append(textElement);
  return commentElement;
};


export {renderComment};
