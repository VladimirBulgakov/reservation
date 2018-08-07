import { connect } from 'react-redux';
import Reservations from './component';
import { postReservation } from '../../store/actions/reservations';

const mapStateToProps = state => ({
  reservations: state.reservations.payload,
});

function mapDispatchToProps(dispatch) {
  return {
    handlePostReservations: () => dispatch(postReservation()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservations);
