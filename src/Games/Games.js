import React, { Component } from 'react';
import Game from './Game';

class Games extends Component {

   constructor(props){
       super(props);
       this.state = {
           games: [],
           displayList: true,
       }
   }

   addGame = () => {
       const newGame = {
            name: 'Game',
            genre: 'Cars'+this.state.games.length
       }
       this.setState({
            games: [...this.state.games, newGame]
       })
   }

   deleteGame = (i) => {
        var array = [...this.state.games]; 
        array.splice(i, 1);
        this.setState({ games: array});
    }

    toggleDisplay = () => {
        this.setState({
            displayList: !this.state.displayList
        })
    };
    
    render() {
        const isEven = (i) => { return i%2 === 0};
        return (
            <div> 
                <h2>Isthmus React Gamestore</h2>
                <h3>{this.props.label}</h3>

                <button onClick={(e) => this.toggleDisplay()}>Toggle display list</button>
                <button onClick={(e) => this.addGame()}>Add game</button>

                {this.state.displayList && 
                    <ul className='games-list'>
                        {this.state.games.map((game, index) => {
                            return (<li key={index} className={isEven(index) ? 'red' : 'blue'}>
                                <Game name={game.name} genre={game.genre} index={index} remove={this.deleteGame} />                    
                                </li>)
                        })}
                    </ul>
                }
                {!this.state.displayList && 
                <span>List hidden</span>}
            </div>
        );
    }
}
export default Games;