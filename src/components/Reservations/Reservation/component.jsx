import React from 'react';
import PropTypes from 'prop-types';


const Reservation = props => (
  <ul>
    <li>{props.id}</li>
    <li>{props.person_count}</li>
    <li>{props.date}</li>
    <li>{props.state}</li>
  </ul>
);

export default Reservation;

Reservation.propTypes = {
  id: PropTypes.number.isRequired,
  person_count: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
};
