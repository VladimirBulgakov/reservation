import { connect } from 'react-redux';
import Reservations from './component';

const mapStateToProps = state => ({
  reservations: state.reservations.payload,
});

export default connect(mapStateToProps)(Reservations);
