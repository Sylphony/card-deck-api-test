import React from "react";

class PokerField extends React.Component {
    componentDidMount() {
        // Initailize a deck
        this.props.initDeck();
    }

    render() {
        if (this.props.pokerPlayer.players.length > 0) {
            let imgEles = [];

            let hand = this.props.pokerPlayer.players[0].hand;

            for (let i = 0; i < hand.length; i++) {
                imgEles.push(<img src={ hand[i].image } key={ hand[i].code } />);
            }

            return (
                <div className="poker-field">
                    <button type="button" onClick={ this.props.dealCard.bind(null, this.props.pokerField.deck.deck_id) }>Deal Card</button>
                    <button type="button" onClick={ this.props.addPlayer }>Add player</button>
                    { imgEles }
                </div>
            );
        }

        return (
            <div>
                <button type="button" onClick={ this.props.dealCard.bind(null, this.props.pokerField.deck.deck_id) }>Deal Card</button>
                <button type="button" onClick={ this.props.addPlayer }>Add player</button>
            </div>
        );
    }
}

export default PokerField;
