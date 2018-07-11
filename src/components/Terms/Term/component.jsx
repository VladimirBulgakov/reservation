import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Popup } from 'react-popup';
import Popupup from '../Popup/component';

const Term = props => (
  <Table bordered>
      <tr>
        <th>Termín masáže {props.id}</th>
      </tr>
      <td>
        <p>Typ procedůry: č.{props.procedure}</p>
        <p>Datum a čas objednání: {props.date}, {props.time}</p>
        <Button bsStyle="success" bsSize="small">Zarezervuj</Button>
        <Popupup />
      </td>
  </Table>
);


export default Term;
