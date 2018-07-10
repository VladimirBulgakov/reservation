import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTerms } from './store/actions/terms';
import { inputChange } from './store/actions/input';
import { fetchReservations } from './store/actions/reservations';
import { Button } from 'react-bootstrap';
import './App.css';
import Terms from './components/Terms';
import ErrorMessage from './components/ErrorMessage';
import Input from './components/Input';
import RedRamecek from './components/redRamecek';
import Popup from './components/Terms/Popup';
import Reservations from './components/Reservations';


class App extends Component {
  componentDidMount() {
    this.props.handleFetchTerms();
    this.props.handleFetchReservations();
  }
  render() {
    return (
      <div>
        <RedRamecek blue>
          <Terms />
          <Reservations />
        </RedRamecek>
        <Popup />
        <ErrorMessage />
        <Button bsStyle="success">Bootstrap tlacitko</Button>
        <Input
          value={this.props.inputValue}
          onChange={e => this.props.handleImportChange(e.target.value)}
        />
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
