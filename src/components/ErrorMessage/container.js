import { connect } from 'react-redux';
import ErrorMessage from './component';

const mapStateToProps = state => ({
  statusMessage: state.error.statusMessage,
  code: state.error.code,
});

export default connect(mapStateToProps)(ErrorMessage);
