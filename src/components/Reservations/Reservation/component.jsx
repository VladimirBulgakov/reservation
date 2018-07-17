import React from 'react';
import PropTypes from 'prop-types';


const Reservation = props => (
  <ul styles={{ color: props.isAvailable ? 'black' : 'red' }}>
    <li>{props.id}</li>
    <li>{props.person_count}</li>
    <li>{props.date}</li>
    <li>{props.state}</li>
  </ul>
);

export default Reservation;

Reservation.propTypes = {
  isAvailable: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  person_count: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};
