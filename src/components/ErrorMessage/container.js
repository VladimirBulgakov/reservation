import { connect } from 'react-redux';
import ErrorMessage from './component';
import { errorMessage } from '../../store/actions/errorMessage';

const mapStateToProps = state => ({
  errorZprava: state.error.errorZprava,
  code: state.error.code,
});

function mapDispatchToProps(dispatch) {
  return {
    handleErrorMessage: () => dispatch(errorMessage()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
