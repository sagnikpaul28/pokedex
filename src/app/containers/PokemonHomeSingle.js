import React from "react";

export class PokemonHomeSingle extends React.Component {
    render() {
        return (
            <div className="pokemon-box">
                <img src={this.props.item.imageDirectory} alt={this.props.item.name}/>
                <h3 className="rank">#{this.props.item.rank}</h3>
                <h2 className="name">{this.props.item.name}</h2>
            </div>
        )
    }
}