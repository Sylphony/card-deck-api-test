import cardDeckApi from "./api/cardDeckApi";

// A generated deck id to use
const DECK_ID = "wtiwta6hedbc";

// Card deck object with API calls
const cardDeck = new cardDeckApi();

/**
 * initDeck()
 * Action to initalize a deck.
 */
export function initDeck() {
    return (dispatch) => 
        cardDeck
            .initDeck(DECK_ID)
            .then((resp) => {
                // Once a response is received, dispatch action to reducers
                dispatch({
                    type: "INIT_DECK",
                    payload: resp.data
                });
            });
}

/**
 * dealCard()
 * Action to deal cards to a player.
 */
export function dealCard() {
    return (dispatch) =>
        cardDeck
            .dealCard(DECK_ID, 1)
            .then((resp) => {            
                dispatch({
                    type: "DEAL_CARD",
                    cards: resp.data.cards
                });
            });
}

/**
 * dealHand()
 * Action to deal a 5-card hand to a player.
 */
export function dealHand() {
    return (dispatch) =>
        cardDeck
            .dealCard(DECK_ID, 5)
            .then((resp) => {            
                dispatch({
                    type: "DEAL_HAND",
                    cards: resp.data.cards
                });
            });
}

/**
 * discardCard()
 * Action for player to discard a card from their hand.
 */
export function discardCard() {
    return {
        type: "DISCARD_CARD"
    };
}

/**
 * addPlayer()
 * Action to add a player to the game.
 */
export function addPlayer() {
    return {
        type: "ADD_PLAYER"
    };
}
