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

    }
    return state;
};

export default modalReducer;
