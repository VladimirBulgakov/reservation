import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Terms from './components/Terms';
import ErrorMessage from './components/ErrorMessage';


const App = () => (
  <div>
    <Terms />
    <ErrorMessage />
  </div>
);

export default App;

