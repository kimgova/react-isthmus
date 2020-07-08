import React from 'react';
import { useDispatch } from 'react-redux';

function ToogleName (props) {
    const dispatch = useDispatch();

    const updateName = () => {
        dispatch({
            type: 'update',
            value: 'test'
        })
    }

    const deleteName = () => {
        dispatch({
            type: 'delete',
        })
    }

    return (
        <div>
           <button onClick={updateName}>Update</button>
           <button onClick={deleteName}>Delete</button>
        </div>
    );
};
export default ToogleName;