import React from "react";

class PokerField extends React.Component {
    componentDidMount() {
        // Initailize a deck
        this.props.initDeck();
    }

    render() {
        return (
            <div className="poker-field">
                <button type="button" onClick={ this.props.initDeck }>Push</button>
                { this.props.pokerField.deck.deck_id }
            </div>
        );
    }
}

export default PokerField;
