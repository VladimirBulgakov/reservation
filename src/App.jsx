import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Terms from './components/Terms';
import ErrorMessage from './components/ErrorMessage';
import Reservation from './components/Reservations';


const App = () => (
  <div>
    <Terms />
    <ErrorMessage />
    <Reservation />
  </div>
);

export default App;

