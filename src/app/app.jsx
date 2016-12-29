import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app.store";
import PokerPlayerContainer from "./poker/containers/PokerPlayerContainer";

class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <div className="poker">
                    <PokerPlayerContainer />
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
