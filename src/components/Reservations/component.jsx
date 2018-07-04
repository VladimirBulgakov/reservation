import React from 'react';
import Reservation from './Reservation';

const Reservations = props => (
  props.reservations.map((reservation, i) => <Reservation key={i} {...reservation} />)
);

export default Reservations;
