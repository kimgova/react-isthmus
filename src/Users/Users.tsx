import React from 'react';

const Users = (props: any) => {
    return (
        <div>
            Users List
            <ul>
                <li>{props.name} 
                    <button onClick={ (e) => props.saySmt("Hola!")}>CLICK!</button>
                </li>
            </ul>

        </div>
    );
};
export default Users;