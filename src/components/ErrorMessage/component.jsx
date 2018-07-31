import React, { Component } from 'react';

export default class ErrorMessage extends Component {
  render() {
    if (this.props.errorZprava === 'mame tu error') {
      return <h2>mame errora</h2>;
    }
      return <h2>nemame errora</h2>;
  }
}
