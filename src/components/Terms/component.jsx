import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Term from './Term';

export default class Terms extends Component {
  componentDidMount() {
    this.props.handleFetchTerms();
  }
  render() {
    return (
      this.props.terms.map(term => (<Term
        key={term.id}
        {...term}
        // isAvilible={this.isAvailable(this.props.date_of_application_end, Date.now())}
      />))
    );
  }
}


Terms.propTypes = {
  handleFetchTerms: PropTypes.func.isRequired,
  terms: PropTypes.arrayOf(PropTypes.object).isRequired,
};
