import axios from "axios";

class CardDeckApi {
    /**
     * Initialize (and shuffle) a deck.
     * @param deckId: The deck's id.
     */
    initDeck(deckId) {
        return axios({
            method: "GET",
            url: `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`,
            params: {
                "deck_count": 1
            }
        });
    }

    /**
     * Deal cards from the deck.
     * @param deckId: The deck's id.
     * @param numCards: Number of cards to deal.
     */
    dealCard(deckId, numCards = 1) {
        return axios({
            method: "GET",
            url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/`,
            params: {
                count: numCards
            }
        });
    }
}

export default CardDeckApi;
