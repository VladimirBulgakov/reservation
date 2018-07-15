import React from 'react';

const Input = props => (
  <div>
    <input value={props.inputValue} onChange={props.onChange} type="text" />
  </div>
);

export default Input;
