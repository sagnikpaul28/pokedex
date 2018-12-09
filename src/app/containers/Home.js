import React from "react";

import { pokemonData } from "../pokemon.json";

import PokemonSingleModal from "./PokemonSingleModal";

import {loadItems} from "../actions/homeActions";
import { connect } from "react-redux";

export class Home extends React.Component {

    componentDidMount() {
        this.props.loadItems(pokemonData);
    }

    render(){
        return (
            <div>
                <div className="pokemons">
                    {this.props.home.items}
                </div>
                <PokemonSingleModal/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.homeReducer,
        modal: state.modalReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadItems: (pokemonData) => {
            dispatch(
                loadItems(pokemonData)
            );
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);