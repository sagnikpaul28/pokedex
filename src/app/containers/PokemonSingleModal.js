import React from "react";

import { connect } from "react-redux";

import { PreviousPokemon} from "../components/PreviousPokemon";
import { NextPokemon } from "../components/NextPokemon";

export class PokemonSingleModal extends React.Component {

    render() {
        if (this.props.modal.isVisible === 0) {
            return (
                <div/>
            )
        }else {
            let types = this.props.modal.pokemon.type.map(item => {
                return (
                    <div className={item} key={item}>
                        {item}
                    </div>
                )
            });

            let imageUrl = '/images/' + this.props.modal.pokemon.rank + '.png';

            return (
                <div className="pokemon-single">
                    <div className="pokemon-modal-layer"/>
                    <div className="pokemon-modal-container">
                        <PreviousPokemon item={this.props.modal.previous}/>
                        <NextPokemon item={this.props.modal.next}/>
                        <h2 className="pokemon-name">{this.props.modal.pokemon.name} <span>#{this.props.modal.pokemon.rank}</span>
                        </h2>
                        <div className="pokemon-details-container">
                            <img src={imageUrl} alt={this.props.modal.pokemon.name}/>
                            <div className="pokemon-details">
                                <p>{this.props.modal.pokemon.description}</p>
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
}

const mapStateToProps = (state) => {
    return {
        home: state.homeReducer,
        modal: state.modalReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect (mapStateToProps, mapDispatchToProps)(PokemonSingleModal);