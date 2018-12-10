import React from "react";
import { connect } from "react-redux";
import {showNextPokemon} from "../actions/modalActions";

export class NextPokemon extends React.Component {
    render() {
        if (!this.props.item) {
            return (
                <div className="previous-pokemon">
                    <h4><span>&nbsp;</span>&nbsp;</h4>
                </div>
            );
        }else {
            return (
                <div className="next-pokemon" onClick={() => this.props.showNextPokemon(this.props.currentItem)}>
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
        showNextPokemon: (item) => {
            dispatch(
                showNextPokemon(item)
            )
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NextPokemon);