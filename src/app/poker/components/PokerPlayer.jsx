import React from "react";

class PokerPlayer extends React.Component {
    componentDidMount() {
        // Initailize a deck
        this.props.initDeck();
    }

    render() {
        console.log("inside PokerPlayer\n", this.props);

        return (
            <div className="poker-player">
                <button type="button" onClick={ this.props.initDeck }>Push</button>
                { this.props.pokerField.deck.deck_id }
            </div>
        );
    }
}

export default PokerPlayer;
