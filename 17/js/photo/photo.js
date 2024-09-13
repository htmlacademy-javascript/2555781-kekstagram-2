const picturesListElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const fileInputElement = document.querySelector('#upload-file');
const previewElements = document.querySelectorAll('.effects__preview');
const imagePreviewElement = document.querySelector('.img-upload__preview img');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const renderPhotoDescriptions = (photosData) => {
  photosData.forEach(({id, url, description, likes, comments}) => {
    const photoItemElement = pictureTemplateElement.cloneNode(true);
    const photoImageElement = photoItemElement.querySelector('.picture__img');
    const photoLikesElement = photoItemElement.querySelector('.picture__likes');
    const photoCommentsElement = photoItemElement.querySelector('.picture__comments');

    photoLikesElement.textContent = likes;
    photoCommentsElement.textContent = Object.keys(comments).length;
    photoImageElement.src = url;
    photoImageElement.alt = description;
    photoImageElement.dataset.id = id;

    picturesListElement.append(photoItemElement);
  });
};

const onFileInputChange = () => {
  const file = fileInputElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const objectURL = URL.createObjectURL(file);
    imagePreviewElement.src = objectURL;
    previewElements.forEach((previewElement) => {
      previewElement.style.backgroundImage = `url(${objectURL})`;
    });
  }
};

fileInputElement.addEventListener('change', onFileInputChange);

export {renderPhotoDescriptions};
