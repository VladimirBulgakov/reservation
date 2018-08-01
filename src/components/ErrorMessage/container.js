import { connect } from 'react-redux';
import ErrorMessage from './component';

const mapStateToProps = state => ({
  errorMessage: state.error.errorMessage,
});

export default connect(mapStateToProps)(ErrorMessage);
