import axios from "axios";

/**
 * Make requests to the API.
 */
const cardDeckApi = {
    /**
     * Initialize (and shuffle) a deck.
     * @param deckId: The deck's id.
     */
    initDeck: function(deckId) {
        return axios({
            method: "GET",
            url: `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`,
            params: {
                "deck_count": 1
            }
        });
    },

    /**
     * Deal cards from the deck.
     * @param deckId: The deck's id.
     * @param numCards: Number of cards to deal.
     */
    dealCard: function(deckId, numCards = 1) {
        return axios({
            method: "GET",
            url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/`,
            params: {
                count: numCards
            }
        });
    }
};

export default cardDeckApi;
