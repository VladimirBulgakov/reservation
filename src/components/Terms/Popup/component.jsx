import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Button } from 'react-bootstrap';


export default () => {
  return ( 
    <Popup trigger={<Button bsStyle="success" bsSize="small">Zarezervuj</Button>} position="right center">
      <div>
        <div>Rezervace termínu.</div>
        <Button bsStyle="warning" bsSize="small">Chci tento termín</Button>
      </div>
    </Popup>
  );
};
