import { errorMessage } from './errorMessage';

export const REQUEST_POST_RESERVATIONS = 'REQUEST_POST_RESERVATIONS';
export const POST_RESERVATION = 'POST_RESERVATION';

export const requestPostResevations = () => ({
  type: REQUEST_POST_RESERVATIONS,
});

export const fullfillReservation = newResevation => ({
  type: POST_RESERVATION,
  newResevation,
});

const reservationsApi = 'http://private-921ac-taskapi3.apiary-mock.com/reservation/';

export const postReservation = () => dispatch => (
  fetch(
    reservationsApi,
    {
      method: 'post',
      body: JSON.stringify(dispatch),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then(data => dispatch(fullfillReservation(data)))
);

