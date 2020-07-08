import React, {useContext} from 'react';
import TestContext from '../TestContext';

function Users (props) {
    const {name, changeName} = useContext(TestContext);
    
    return (
        <div>
           User: {name}
        </div>
    );
};
export default Users;