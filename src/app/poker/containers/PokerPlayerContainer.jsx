import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./../actions/actionCreators";
import PokerPlayer from "./../components/PokerPlayer.jsx";

class PokerPlayerContainer extends React.Component {
    render() {
        return (
            <PokerPlayer {...this.props } />
        );
    }
}

/**
 * Map state items to props.
 */
function mapStateToProps(state) {
    return {
        pokerField: state.pokerField
    };
}

/**
 * Map dispatch events to props.
 */
function mapDispatchToProps(dispatch) {
    // Bind all action creators to dispatch
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokerPlayerContainer);
