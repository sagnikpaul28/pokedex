import React from "react";
import {showPreviousPokemon} from "../actions/modalActions";
import { connect } from "react-redux";

export class PreviousPokemon extends React.Component {
    render() {
        if ( !this.props.item) {
            return (
                <div className="previous-pokemon">
                    <h4><span>&nbsp;</span>&nbsp;</h4>
                </div>
            );
        }else {
            return (
                <div className="previous-pokemon" onClick={() => this.props.showPreviousPokemon(this.props.item)}>
                    <h4><span>#{this.props.item.rank}</span> {this.props.item.name}</h4>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modalReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showPreviousPokemon: (item) => {
            dispatch(
                showPreviousPokemon(item)
            )
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(PreviousPokemon);