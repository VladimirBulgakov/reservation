import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Terms from './components/Terms';
import ErrorMessage from './components/ErrorMessage';
import Input from './components/Input';


const App = ({errors}) => (
  <div>
    <Terms />
    <ErrorMessage />
    <Input />
  </div>
);

export default App;

