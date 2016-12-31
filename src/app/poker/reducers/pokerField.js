const INITIAL_STATE = {
    deck: {
        "deck_id": null,
        remaining: null
    }
};

/**
 * Poker field reducer.
 */
function pokerField(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "INIT_DECK":
            return {
                ...state,
                deck: action.payload
            };

        default:
            return state;
    }
}

export default {
    pokerField
}
