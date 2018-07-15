import React from 'react';
import Popup from 'reactjs-popup';
import { Button } from 'react-bootstrap';

const PopupTermReservation = props => (
  <Popup trigger={<Button bsStyle="success" bsSize="small">Zarezervuj</Button>} position="right center">
    <div>
      <div>Rezervace termínu.</div>
      <Button bsStyle="warning" bsSize="small">Chci tento termín</Button>
    </div>
  </Popup>
);

export default PopupTermReservation;
