import React from 'react';

const Reservation = props => (
  <ul styles={{ color: props.isAvailable ? 'black' : 'red' }}>
    <li>{props.id}</li>
    <li>{props.person_count}</li>
    <li>{props.date}</li>
    <li>{props.state}</li>
  </ul>
);

export default Reservation;
