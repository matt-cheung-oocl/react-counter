import React, { Component } from 'react'
import { INIT_COUNTER_VALUE, COUNTER_INCREMENT, COUNTER_DECREMENT } from '../constants/constants'

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);

        this.state = {
            value: INIT_COUNTER_VALUE,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.number !== prevProps.number) {
            this.setState({value: INIT_COUNTER_VALUE});
        }
        if(this.state.value != prevState.value) {
            this.props.onCalculate(this.state.value - prevState.value);
        }
    }

    onIncrease() {
        this.setState((prevState) => ({value: prevState.value + COUNTER_INCREMENT}));
    }

    onDecrease() {
        this.setState((prevState) => ({value: prevState.value + COUNTER_DECREMENT}));
    }

    render() {
        return (
            <div>    
                <button onClick = {this.onDecrease}>-</button>
                <span>{this.state.value}</span>
                <button onClick = {this.onIncrease}>+</button>
            </div>
        )
    }
}
