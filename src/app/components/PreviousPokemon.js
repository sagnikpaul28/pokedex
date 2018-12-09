import React from "react";

export class PreviousPokemon extends React.Component {
    render() {
        if (this.props.item === null ) {
            return (
                null
            );
        }else {
            return (
                <div className="previous-pokemon">
                    <h4><span>#{this.props.item.rank}</span> {this.props.item.name}</h4>
                </div>
            )
        }
    }
}