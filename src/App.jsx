import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTerms } from './store/actions/terms';
import { fetchReservations } from './store/actions/reservations';
import './App.css';
import Terms from './components/Terms';
import ErrorMessage from './components/ErrorMessage';
import Input from './components/Input';
import Reservations from './components/Reservations';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  componentDidMount() {
    this.props.handleFetchTerms();
    this.props.handleFetchReservations();
  }
  render() {
    return (
      <div>
        <Terms />
        <Reservations />
        <ErrorMessage />
        <Input />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    handleFetchTerms: () => dispatch(fetchTerms()),
    handleFetchReservations: () => dispatch(fetchReservations()),
  };
}

export default connect(() => ({}), mapDispatchToProps)(App);
