import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: "https://deckofcardsapi.com/api/deck/new/shuffle/",
            params: {
                "deck_count": 1
            }
        })
        .then((resp) => {
            return axios.get("https://deckofcardsapi.com/api/deck/" + resp.data.deck_id + "/draw/", {
                params: {
                    count: 4
                }
            });
        })
        .then((resp) => {
            console.log(resp);

            this.setState({
                data: resp.data.cards
            });
        });
    }

    render() {
        if (this.state.data) {
            let imgEles = this.state.data.map((item) => {
                return (
                    <img src={ item.image } key={ item.image } />
                );
            }); 

            return (
                <div>
                    { imgEles }
                </div>
            );
        }

        return (<div>Loading</div>);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
