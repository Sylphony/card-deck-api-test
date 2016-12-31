import axios from "axios";

// Initialize a deck object
export function initDeck() {
    return (dispatch) => {
        return axios({
            method: "GET",
            url: "https://deckofcardsapi.com/api/deck/new/shuffle/",
            params: {
                "deck_count": 1
            }
        })
        .then((resp) => {
            dispatch({
                type: "INIT_DECK",
                payload: resp.data
            });
        });
    };
}

// Deal a card to a player
export function dealCard() {
    return {
        type: "DEAL_CARD"
    };
}

// Player discards a card
export function discardCard() {
    return {
        type: "DISCARD_CARD"
    };
}
