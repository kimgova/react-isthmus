import React, { Component } from 'react';
import Users from '../Users/Users';

class Games extends Component {
    saySmtHandle = (message: String) => {
        alert("User says " + message);
    } 

    render() {
        const name: String = "test";

        return (
            <div> <Users name="Kimberly" saySmt={this.saySmtHandle}></Users>
            </div>
        );
    }
}
export default Games;