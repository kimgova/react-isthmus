import React, {useContext} from 'react';
import { useSelector } from 'react-redux';

function Users (props) {
    const state = useSelector(state => state);
    
    return (
        <div>
           User: {state.name}
        </div>
    );
};
export default Users;