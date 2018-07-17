import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Term from './Term';

export default class Terms extends Component {
  componentDidMount() {
    this.props.handleFetchTerms();
  }
  render() {
    return (
      this.props.terms.map(term => <Term key={this.props.id} {...term} />)
    );
  }
}

Terms.propTypes = {
  handleFetchTerms: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  terms: PropTypes.objectOf(PropTypes.array).isRequired,
  // terms: PropTypes.arrayOf(function(propValue, key, Term, location, propFullName)
  // terms: PropTypes.any.isRequired,
};
