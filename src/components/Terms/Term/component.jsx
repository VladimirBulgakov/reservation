import React from 'react';

const Term = props => (
  <ul styles={{ color: props.isAvailable ? 'black' : 'red' }}>
    <li>{props.date}</li>
    <li>{props.date_of_application_end}</li>
    <li>{props.id}</li>
    <li>{props.procedure}</li>
    <li>{props.time}</li>
  </ul>
);


export default Term;
