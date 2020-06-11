import React, { Component } from "react";
import './Pokecard.css';

const api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

class Pokecard extends Component{
    render(){
        let currentPokemon = this.props.pokemon;

        //image link requires three numbers ex: 001, 021, 210
        let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
        let imgsrc = `${api}${padToThree(currentPokemon.id)}.png`;
            
            return (
                <div className="Pokecard">
                    <div className="Pokecard-hand">
                        <h2 className="Pokecard-name"> {currentPokemon.name}</h2>
                        <img className="Pokecard-image" src={imgsrc} alt={currentPokemon.name}/>
                        <p className="Pokecard-type">Type: {currentPokemon.type}</p>
                        <p className="Pokecard-exp">EXP: {currentPokemon.base_experience}</p>
                    </div>
                </div>
            );
        
        }

    }

  export { Pokecard };