const INITIAL_STATE = {

};

/**
 * Commands list reducer.
 */
function pokerPlayer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "CREATE_DECK":
            return {
                ...state
            };

        default:
            return state;
    }
}

export default {
    pokerPlayer
}
