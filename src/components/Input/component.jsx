import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div>
        <input value={this.props.inputValue} onChange={this.props.onChange} type="text" />
      </div>
    );
  }
}
