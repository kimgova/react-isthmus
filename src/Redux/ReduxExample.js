import React, { useState } from 'react';
import Users from './Users/Users';
import ToogleName from './ToogleName/ToogleName';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

function ReduxExample(props) {
    return (
     <Provider store={store}>
         <div>
             <Users></Users>
             <ToogleName></ToogleName>
         </div>
     </Provider>
    );
  }
  
  export default ReduxExample;
  