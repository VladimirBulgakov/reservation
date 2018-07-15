import { connect } from 'react-redux';
import Input from './component';
import { inputChange } from '../../store/actions/input';

function mapStateToProps(state) {
  return {
    inputValue: state.input,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: e => dispatch(inputChange(e.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
