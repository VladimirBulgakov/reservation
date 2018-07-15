import React, { Component } from 'react';
import Reservation from './Reservation';

export default class Reservations extends Component {
  componentDidMount() {
    this.props.handleFetchReservations();
  }
  render() {
    return ( 
      this.props.reservations.map((reservation, i) => <Reservation key={i} {...reservation} />)
    );
  }
}

