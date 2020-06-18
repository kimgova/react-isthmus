import React, { useEffect } from 'react';

function Game(props) {

    useEffect( () => {
        console.log('Component did mount (it runs only once)');
        return () => console.log('Component will unmount');
    }, []);

    useEffect( () => {
        console.log('Component did update');
    });

    useEffect( () => {
        console.log('Component will receive props');
        console.log(props);
    }, [props]);
  
    return (
      <div className="App">
        {props.name} - {props.genre} <button onClick= {(e) => props.remove(props.index)}>Remove</button>
      </div>
    );
  }
  
  export default Game;
  