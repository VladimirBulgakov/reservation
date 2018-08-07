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

const termsApi = 'http://private-921ac-taskapi3.apiary-mock.com/date/';

export const fetchTerms = () => dispatch => (
  fetch(
    termsApi,
    {
      method: 'get',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  )
    .then(response => response.json())
    .then(data => dispatch(fulfillTerms(data)))
    .catch((err) => {
      dispatch(errorMessage(err.message));
      console.log({ err });
    })
);
