import React, { Component } from 'react';
import './App.css';
import Terms from './components/Terms';
import ErrorMessage from './components/ErrorMessage';
import Input from './components/Input';
import Reservations from './components/Reservations';
import 'bootstrap/dist/css/bootstrap.css';


export default class App extends Component {
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
