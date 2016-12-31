const INITIAL_STATE = {
    deck: {
        "deck_id": null,
        remaining: null
    }
};

/**
 * pokerField()
 * Poker field reducer.
 * @param state: The Redux state.
 * @param action: The action that is dispatched.
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
