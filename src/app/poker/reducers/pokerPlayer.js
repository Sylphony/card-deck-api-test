const INITIAL_STATE = {
    players: [],
    playerCount: 0
};

/**
 * Player()
 * A new player object.
 * @param id: The id of the player.
 */
function Player(id) {
    this.id = id;
    this.hand = [];
}

/**
 * pokerPlayer()
 * Poker player reducer.
 * @param state: The Redux state.
 * @param action: The action that is dispatched.
 */
function pokerPlayer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ADD_PLAYER":
            const player = new Player(state.playerCount + 1);

            return {
                ...state,
                players: [...state.players, player],
                playerCount: state.playerCount + 1
            };

        case "DEAL_CARD":
            state.players[0].hand = action.cards;

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
