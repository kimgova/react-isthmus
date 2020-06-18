import React, { useState, useEffect } from 'react';
import './App.css';
import Games from './Games/Games';

function App() {

  const [label, setLabel] = useState('testing');

  useEffect( () => {
    console.log('Efect log');
    setTimeout( () => {
      setLabel('after time');
    }, 4000 )
  }, []);

  return (
    <div className="App">
      {label}
        <Games label={label}/>
    </div>
  );
}

export default App;
