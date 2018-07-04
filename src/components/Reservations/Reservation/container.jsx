import React, { Component } from 'react';
import Reservation from './component';

export default class ReservationContainer extends Component {
  render() {
    return (<Reservation
      {...this.props}
    />);
  }
}
