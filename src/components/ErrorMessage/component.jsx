import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
  if (props.errorMessage !== 'no error') {
    return <h2>{props.errorMessage}</h2>;
  }
  return null;
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
