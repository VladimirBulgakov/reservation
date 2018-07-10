import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Term = props => (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>Termín masáže {props.id}</th>
      </tr>
    </thead>
    <tbody>
      <td>
        <p>Typ procedůry: č.{props.procedure}</p>
        <p>Datum a čas objednání: {props.date}, {props.time}</p>
        <p>
          <Button bsStyle="success">Zarezervuj</Button>
        </p>
      </td>
    </tbody>
  </Table>
);


export default Term;
