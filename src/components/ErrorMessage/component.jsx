import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
  if (props.errorZprava === 'mame tu error') {
    return <h2>mame error</h2>;
  }
  return <h2>nemame error</h2>;
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  errorZprava: PropTypes.string.isRequired,
};
