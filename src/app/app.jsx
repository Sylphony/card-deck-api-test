import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app.store";
import PokerFieldContainer from "./poker/containers/PokerFieldContainer";

class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <div className="poker">
                    <PokerFieldContainer />
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
