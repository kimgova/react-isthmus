import React, {useContext} from 'react';
import TestContext from '../TestContext';

function ToogleName (props) {
    const {name, changeName} = useContext(TestContext);

    const updateName = () => {
        changeName('test');
    }
    return (
        <div>
           <button onClick={updateName}>Update</button>
        </div>
    );
};
export default ToogleName;