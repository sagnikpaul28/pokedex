import React from "react";

import { connect } from "react-redux";

import PreviousPokemon from "../components/PreviousPokemon";
import NextPokemon from "../components/NextPokemon";
import {modalHide, showNextPokemon, showPreviousPokemon} from "../actions/modalActions";
import {pokemonData} from "../pokemon.json";

export class PokemonSingleModal extends React.Component {
    constructor() {
        super();

        this.closeModal = this.closeModal.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    closeModal() {
        if (this.props.modal.isVisible === 1) {
            this.props.modalHide();
        }
    }

    onKeyPress(e) {
        if (e.keyCode === 27) {
            this.closeModal();
        }else if (e.keyCode === 39 && this.props.modal.pokemon.rank < pokemonData.length) {
            this.props.nextPokemon(this.props.modal.pokemon);
        }else if (e.keyCode === 37 && this.props.modal.pokemon.rank > 1) {
            this.props.previousPokemon(this.props.modal.pokemon);
        }
    }

    componentWillMount() {
        document.addEventListener("keydown", this.onKeyPress, false);
    }

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
                        <PreviousPokemon item={this.props.modal.previous} currentItem={this.props.modal.pokemon}/>
                        <NextPokemon item={this.props.modal.next} currentItem={this.props.modal.pokemon}/>
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
                        <button onClick={() => this.closeModal()} className="close">Close</button>
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
        modalHide: () => {
            dispatch(
                modalHide()
            )
        },
        nextPokemon: (item) => {
            dispatch(
                showNextPokemon(item)
            )
        },
        previousPokemon: (item) => {
            dispatch(
                showPreviousPokemon(item)
            )
        }
    }

};

export default connect (mapStateToProps, mapDispatchToProps)(PokemonSingleModal);