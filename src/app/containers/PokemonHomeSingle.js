import React from "react";

import { modalShow } from "../actions/modalActions";
import { connect } from "react-redux";

export class PokemonHomeSingle extends React.Component {
    callModalShow() {
        this.props.modalShow(this.props.item);
    }

    render() {
        return (
            <div className="pokemon-box" onClick = {() => this.callModalShow() }>
                <img src={this.props.item.imageDirectory} alt={this.props.item.name}/>
                <h3 className="rank">#{this.props.item.rank}</h3>
                <h2 className="name">{this.props.item.name}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.homeReducer,
        modal: state.modalReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalShow: (modalItem) => {
            dispatch(
                modalShow(modalItem)
            );
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHomeSingle);