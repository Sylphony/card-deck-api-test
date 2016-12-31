import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./../actions/actionCreators";
import PokerField from "./../components/PokerField.jsx";

class PokerFieldContainer extends React.Component {
    render() {
        return (
            <div>
                <PokerField {...this.props } />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PokerFieldContainer);
