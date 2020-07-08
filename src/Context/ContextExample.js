import React, { useState } from 'react';
import TestContext from './TestContext';
import Users from './Users/Users';
import ToogleName from './ToogleName/ToogleName';

function ContextExample(props) {

    const [name, setName] = useState('Rex2');
    const changeName = (newName) => setName(newName);

    return (
      <TestContext.Provider value={{name,changeName}}>
          <div>
              <Users></Users>
              <ToogleName></ToogleName>
          </div>
      </TestContext.Provider>
    );
  }
  
  export default ContextExample;
  