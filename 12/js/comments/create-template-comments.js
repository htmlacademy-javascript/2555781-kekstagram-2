// //  Создание теплейта для комментариев
const createTemplateComments = ({avatar, name, message}) => {
  const container = document.createElement('li');
  const text = document.createElement('p');
  const image = new Image(35, 35);

  container.classList.add('social__comment');
  text.classList.add('social__text');
  image.classList.add('social__picture');

  image.src = avatar;
  image.alt = name;
  text.textContent = message;

  container.append(image);
  container.append(text);
  return container;
};


export {createTemplateComments};
