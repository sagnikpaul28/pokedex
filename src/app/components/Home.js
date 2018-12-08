import React from "react";

import { pokemonData } from "../pokemon.json";

import { PokemonSingleModal } from "./PokemonSingleModal";
import { PokemonHomeSingle } from "../containers/PokemonHomeSingle";

export class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            items: null
        }
    }

    componentDidMount() {
        this.setState({
            items: pokemonData.map( item => {

                item.imageDirectory = '/images/' + item.rank + '.png';

                return (
                    <PokemonHomeSingle item={item} key={item.rank}/>
                );
            })
        });
    }

    render(){
        return (
            <div>
                <div className="pokemons">
                    {this.state.items}
                </div>
                <PokemonSingleModal/>
            </div>
        )
    }
}