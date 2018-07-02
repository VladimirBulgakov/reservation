import React, { Component } from 'react';
import Term from './component';

export default class TermContainer extends Component {
  isAvailable(termDate, currentDate) {
    return termDate <= currentDate;
  }

  render() {

    return (<Term
      {...this.props}
      isAvailable={this.isAvailable(this.props.date_of_application_end, Date.now())}
    />);
  }
}   
