const modalReducer = (state = {
    isVisible: 0,
    pokemon: null,
    previous: null,
    next: null
}, action) => {
    switch(action.type) {

        case "SHOW_MODAL":
            state = {
                ...state,
                isVisible: action.payload.isVisible,
                pokemon: action.payload.pokemon,
                previous: action.payload.previousPokemon,
                next: action.payload.nextPokemon
            };
            break;

        case "HIDE_MODAL":
            state = {
                ...state,
                isVisible: 0,
                item: null
            };
            break;

        case "PREVIOUS_POKEMON":
            console.log("state ", state);
            console.log("payload ", action.payload);
            state = {
                ...state,
                next: state.pokemon,
                pokemon: state.previous,
                previous: action.payload
            };
            break;

        case "NEXT_POKEMON":
            state = {
                ...state,
                previous: state.pokemon,
                pokemon: state.next,
                next: action.payload
            };
            console.log(state);
            break;
    }
    return state;
};

export default modalReducer;
