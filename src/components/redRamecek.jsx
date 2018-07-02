import React, { Component } from 'react';

export default class RedRamecek extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const myStyle = {
      borderStyle: 'solid',
      borderColor: this.props.blue ? 'blue' : 'red'
    };

    return(
      <div style={myStyle}>
        {this.props.children}
      </div>
    )
  }
}

/*
  <RedRamecek blue={true}>
    <mujComponent/>

    <asdf>
  </RedRamecek>
*/
