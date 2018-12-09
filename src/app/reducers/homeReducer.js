const homeReducer = (state = {
    items: null
}, action) => {
    switch (action.type) {
        case "LOAD_CONTENT":

            state = {
                ...state,
                items: action.payload
            };
            break;
    }
    return state;
};

export default homeReducer;
