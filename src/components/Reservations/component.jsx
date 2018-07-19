import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Reservation from './Reservation';

export default class Reservations extends Component {
  componentDidMount() {
    this.props.handleFetchReservations();
  }
  render() {
    return (
      this.props.reservations.map(reservation => (<Reservation
        key={reservation.id}
        {...reservation}
      />))
    );
  }
}

Reservations.propTypes = {
  handleFetchReservations: PropTypes.func.isRequired,
  reservations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
