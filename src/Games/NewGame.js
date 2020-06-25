import React, { useState } from 'react';

const NewGame = (props) => {
    const [state, setState] = useState({
        name: '',
        genre: ''
    })

    const handleChange = (event) => {
        let newState = Object.assign({}, state);
        newState[event.target.name] = event.target.value;
        setState(newState);
    }

    const save = (e) => {
        props.save(state);
        e.preventDefault();

        let newState = Object.assign({}, state);
        newState["name"] = "";
        newState["genre"] = "";

        setState(newState);
    }

    return (
        <div>
           <form onSubmit={save}>
               <label>Name</label> <input type="text" value={ state.name || ""} name="name" onChange={handleChange}/>
               <label>Genre</label> <input type="text" value={ state.genre || ""} name="genre" onChange={handleChange}/>
               <input type="submit" value="Guardar"/>
           </form>

        </div>
    );
};
export default NewGame;