import { Pokecard } from './Pokecard'
import React, { Component } from "react";
import './Pokedex.css';

class Pokedex extends Component{
    render(){
      let hand = this.props.hand;

      //check if isWinner prop is true or false
      let title = this.props.isWinner ? 
      <h2 className="Pokedex-winner">Winning Hand</h2> : 
      <h2 className="Pokedex-loser">Losing Hand</h2>;

      return (
        <div className="Pokedex">
          {title}
          <p>Total Experience: {this.props.totalExp}</p>
          <div className="Pokedex-hand">
            {hand.map(pokemon =>
              <Pokecard
              pokemon = {pokemon}
              />
            )}
          </div>
        </div>
      );
    }
}

export default Pokedex;