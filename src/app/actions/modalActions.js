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

export function showPreviousPokemon(item) {
    let rank = item.rank;
    rank = Number(rank);

    let previousPokemon =  rank !== 1 ? pokemonData[Object.keys(pokemonData)[rank - 2]] : null;

    return {
        type: "PREVIOUS_POKEMON",
        payload: previousPokemon
    }
}

export function showNextPokemon(item) {
    let rank = item.rank;
    rank = Number(rank);

    let nextPokemon =  rank !== pokemonData.length ? pokemonData[Object.keys(pokemonData)[rank]] : null;

    return {
        type: "NEXT_POKEMON",
        payload: nextPokemon
    }
}