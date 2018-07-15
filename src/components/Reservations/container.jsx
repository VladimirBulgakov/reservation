import { connect } from 'react-redux';
import Reservations from './component';
import { fetchReservations } from '../../store/actions/reservations';

const mapStateToProps = state => ({
  reservations: state.reservations.payload,
});

function mapDispatchToProps(dispatch) {
  return {
    handleFetchReservations: () => dispatch(fetchReservations()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservations);
