import { connect } from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import Terms from './components/Terms';
import { fetchTerms } from './store/actions/terms';
import { inputChange } from './store/actions/input';
import ErrorMessage from './components/ErrorMessage';
import Input from './components/Input';
import RedRamecek from './components/redRamecek';
import Popup from './components/Terms/Popup';
import Reservations from './components/Reservations';
import { fetchReservations } from './store/actions/reservations';

class App extends Component {
  componentDidMount() {
    this.props.handleFetchTerms();
    this.props.handleFetchReservations();
  }
  render() {
    return (
      <div>
        <RedRamecek blue>
          <Input
            value={this.props.inputValue}
            onChange={e => this.props.handleImportChange(e.target.value)}
          />
          <ErrorMessage />
          <Terms />
          <Reservations />
        </RedRamecek>
        <Popup />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputValue: state.input,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleImportChange: e => dispatch(inputChange(e)),
    handleFetchTerms: () => dispatch(fetchTerms()),
    handleFetchReservations: () => dispatch(fetchReservations()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
