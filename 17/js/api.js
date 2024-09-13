import './photo/edite-photo/scale.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const ROUTES = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const onResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return response.text().then((text) => {
    throw new Error(`${response.status} — ${response.statusText}: ${text}`);
  });
};

const getData = (onSuccess, onError, onFilters) => {
  fetch(`${BASE_URL}${ROUTES.GET_DATA}`)
    .then(onResponse)
    .then(onSuccess)
    .then(onFilters)
    .catch(onError);
};

const sendData = (body) => fetch(
  `${BASE_URL}${ROUTES.SEND_DATA}`,
  {
    method: 'POST',
    body: body,
  })
  .then(onResponse)
  .catch((error) => {
    throw error;
  });


export {getData, sendData};
