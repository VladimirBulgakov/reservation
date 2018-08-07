import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { Button } from 'react-bootstrap';

export default class Reservations extends Component {
  componentDidMount() {
    this.props.handlePostReservations();
  }
  render() {
    return (
      <Popup trigger={<Button bsStyle="success" bsSize="small">Zarezervuj</Button>} position="right center">
        <div>
          <div>Rezervace termínu.</div>
          <Button bsStyle="warning" bsSize="small">Chci tento termín</Button>
        </div>
      </Popup>
    );
  }
}

Reservations.propTypes = {
  handlePostReservations: PropTypes.func.isRequired,
};
