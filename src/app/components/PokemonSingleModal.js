import React from "react";

import { pokemonData } from "../pokemon.json";

import { PreviousPokemon} from "../containers/PreviousPokemon";
import { NextPokemon } from "../containers/NextPokemon";

export class PokemonSingleModal extends React.Component {
    constructor() {
        super();

        this.state = {
            pokemon: null,
            previous: null,
            next: null
        }
    }

    componentWillMount() {
        this.setState({
            pokemon: {
                "rank": "006",
                "name": "Charizard",
                "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
                "type": [
                    "fire"
                ]
            }
        });


    }

    componentDidMount() {
        let rank = this.state.pokemon.rank;
        rank = Number(rank);

        if (rank !== 0) {
            this.setState({
                next: pokemonData[Object.keys(pokemonData)[rank]],
            });
        }

        if (rank !== pokemonData.length) {
            this.setState({
                previous: pokemonData[Object.keys(pokemonData)[rank - 2]],
            });
        }
    }

    render() {
        let types = this.state.pokemon.type.map( item => {
            return(
                <div className={item} key={item}>
                    {item}
                </div>
            )
        });

        let imageUrl = '/images/' + this.state.pokemon.rank + '.png';

        return(
            <div className="pokemon-single">
                <div className="pokemon-modal-layer" />
                <div className="pokemon-modal-container">
                    <PreviousPokemon item={this.state.previous} />
                    <NextPokemon item={this.state.next} />
                    <h2 className="pokemon-name">{this.state.pokemon.name} <span>#{this.state.pokemon.rank}s</span></h2>
                    <div className="pokemon-details-container">
                        <img src={imageUrl} alt={this.state.pokemon.name}/>
                        <div className="pokemon-details">
                            <p>{this.state.pokemon.description}</p>
                            <div className="pokemon-types-container">
                                Type:
                                <br/>
                                {types}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}