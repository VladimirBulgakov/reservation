import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PopupTermReservation from '../PopupTermReservation/component';

const Term = props => (
  <Table bordered>
    <tbody>
      <tr>
        <th>Termín masáže {props.id}</th>
      </tr>
      <tr>
        <td>
          <p>Typ procedůry: č.{props.procedure}</p>
          <p>Datum a čas objednání: {props.date}, {props.time}</p>
          <PopupTermReservation />
        </td>
      </tr>
    </tbody>
  </Table>
);

export default Term;

Term.propTypes = {
  procedure: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
