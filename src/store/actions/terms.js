import { errorMessage } from './errorMessage';

export const REQUEST_TERMS = 'REQUEST_TERMS';
export const FULFILL_TERMS = 'FULFILL_TERMS';

export const requestTerms = () => ({
  type: REQUEST_TERMS,
});

export const fulfillTerms = payload => ({
  type: FULFILL_TERMS,
  payload,
});

export const fetchTerms = () => dispatch => (
  fetch(
    'http://private-921ac-taskapi3.apiary-mock.com/date/',
    {
      method: 'get',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(payload => dispatch(fulfillTerms(payload)))
    // TODO
    .catch(() => dispatch(errorMessage(/* code, statusMessage */)))
    // TODO ERROR
);
