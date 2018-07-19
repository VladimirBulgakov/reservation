import { connect } from 'react-redux';
import Terms from './component';
import { fetchTerms } from '../../store/actions/terms';


const mapStateToProps = state => ({
  terms: state.terms.payload,
});

function mapDispatchToProps(dispatch) {
  return {
    handleFetchTerms: () => dispatch(fetchTerms()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
