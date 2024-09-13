import './photo/edite-photo/effects.js';
import { showFilterContainer } from './filter/filters.js';
import { getData } from './api.js';
import { renderPhotoDescriptions } from './photo/photo.js';
import { openPhotoGallery } from './photo/photo-gallery.js';
import { setUserFormSubmit } from './validation/form-validation.js';
import { showAlertDowload, showAlertError, showAlertSuccess } from './photo/show-alert/alert.js';
import { filterPhotos } from './filter/filters.js';


const onDataSuccess = (data) => {
  if (!data) {
    return;
  }
  renderPhotoDescriptions(data);
  openPhotoGallery(data);
  filterPhotos(data);
};

const onDataError = () => {
  showAlertDowload();
};

getData(onDataSuccess, onDataError, showFilterContainer, filterPhotos);

setUserFormSubmit(showAlertSuccess, showAlertError);

