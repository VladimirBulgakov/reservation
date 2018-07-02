import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (<input value={this.props.value} onChange={this.props.onChange} type="text" />);
  }
}
