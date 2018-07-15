import React, { Component } from 'react';
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

