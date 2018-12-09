import PokemonHomeSingle from "../containers/PokemonHomeSingle";
import React from "react";

export function loadItems(items) {
    return {
        type: "LOAD_CONTENT",
        payload: items.map( item => {

            item.imageDirectory = '/images/' + item.rank + '.png';

            return (
                <PokemonHomeSingle item={item} key={item.rank}/>
            );
        })
    }
}