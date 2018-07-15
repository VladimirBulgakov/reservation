import React from 'react';
import { Table } from 'react-bootstrap';
import PopupTermReservation from '../PopupTermReservation/component';

export default props => (
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
