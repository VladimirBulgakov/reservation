import React from 'react';
import Term from './Term';

const Terms = props => (
  props.terms.map((term, i) => <Term key={i} {...term} />)
);

export default Terms;
