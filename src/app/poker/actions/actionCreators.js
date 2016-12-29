// Create a new deck object
export function createDeck() {
    return {
        type: "CREATE_DECK"
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
