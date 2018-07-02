import { connect } from 'react-redux';
import Terms from './component';

const mapStateToProps = state => ({
  terms: state.terms.payload,
});

export default connect(mapStateToProps)(Terms);
