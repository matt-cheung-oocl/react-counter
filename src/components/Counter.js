import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);

        this.state = {
            number: 0,
        };
    }

    onIncrease() {
        this.setState((prevState) => ({number: prevState.number + 1}));
    }

    onDecrease() {
        this.setState((prevState) => ({number: prevState.number - 1}));
    }

    render() {
        return (
            <div>    
                <button onClick = {this.onDecrease}>-</button>
                <span>{this.state.number}</span>
                <button onClick = {this.onIncrease}>+</button>
            </div>
        )
    }
}
