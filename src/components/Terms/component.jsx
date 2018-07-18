import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Term from './Term';

export default class Terms extends Component {
  componentDidMount() {
    this.props.handleFetchTerms();
  }
  render() {
    return (
      this.props.terms.map((term, i) => <Term key={i} {...term} />)
    );
  }
}

Terms.propTypes = {
  handleFetchTerms: PropTypes.func.isRequired,
  terms: PropTypes.arrayOf(PropTypes.object).isRequired,
};
