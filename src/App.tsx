import React from 'react';
import logo from './logo.svg';
import './App.css';
import Games from './Games/Games';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Games/>
      </header>
    </div>
  );
}

export default App;
