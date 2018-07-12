import React from 'react';
import { Table, Button } from 'react-bootstrap';
import Popupup from '../Popup/component';

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
          <Popupup>ahoj</Popupup>
        </td>
      </tr>
    </tbody>
  </Table>
);


export default Term;
