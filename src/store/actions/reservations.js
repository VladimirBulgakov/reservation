import { errorMessage } from './errorMessage';

export const REQUEST_RESERVATIONS = 'REQUEST_RESERVATIONS';
export const FULFILL_RESERVATIONS = 'FULFILL_RESERVATIONS';

export const requestResevations = () => ({
  type: REQUEST_RESERVATIONS,
});

export const fulfillReservations = payload => ({
  type: FULFILL_RESERVATIONS,
  payload,
});

export const fetchReservations = () => dispatch => (
  fetch(
    'http://private-921ac-taskapi3.apiary-mock.com/reservation/',
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
    .then(payload => dispatch(fulfillReservations(payload)))
    // TODO
    .catch(() => dispatch(errorMessage(/* code, statusMessage */)))
    // TODO ERROR
);
