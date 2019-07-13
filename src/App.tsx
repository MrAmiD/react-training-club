import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary">
          ReactTraining Club
        </Button>
      </header>
    </div>
  );
};

export default App;
