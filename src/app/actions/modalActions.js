import React from "react";
import {pokemonData} from "../pokemon.json";

export function modalShow(item) {
    let rank = item.rank;
    rank = Number(rank);

    let previousPokemon = null, nextPokemon = null;
    if (rank !== 0) {
        previousPokemon = pokemonData[Object.keys(pokemonData)[rank - 2]]
    }
    if (rank !== pokemonData.length) {
        nextPokemon = pokemonData[Object.keys(pokemonData)[rank]]
    }

    return {
        type: "SHOW_MODAL",
        payload: {
            isVisible: 1,
            pokemon: item,
            previousPokemon: previousPokemon,
            nextPokemon: nextPokemon
        }
    }
}

export function modalHide() {
    return {
        type: "HIDE_MODAL",
        payload: null
    }
}