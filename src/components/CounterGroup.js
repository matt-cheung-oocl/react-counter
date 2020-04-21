import React, { Component } from 'react'
import Counter from './Counter'
import { INIT_COUNTER_SIZE } from '../constants/constants'
import { INIT_COUNTER_GROUP_SUM } from '../constants/constants'

export default class CounterGroup extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onCalculate = this.onCalculate.bind(this);

        this.state = {
            size: INIT_COUNTER_SIZE,
            sum: INIT_COUNTER_GROUP_SUM,
        };
    }

    initArray(size) {
        return Array.from(Array(size).keys());
    }

    onCalculate(delta) {
        this.setState(prevState => ({sum: prevState.sum + delta}));
    }

    onChange(event) {
        const value = event.target.value;
        this.setState({size: value.length > 0 ? parseInt(value) : 0});
    }

    render() {
        let counters = this.initArray(this.state.size);
        return (
            <div>
                <form>
                    <fieldset>
                        Generate
                        <input onChange = {this.onChange} type = "text" value = {this.state.size} />
                        Counters
                        <p>
                            Sum of all counters: {this.state.sum}
                        </p>
                    </fieldset>
                </form>
                {
                    counters.map((value) => (<Counter 
                        key = {value} 
                        number = {this.state.number}
                        onCalculate = {this.onCalculate}/>))
                }
            </div>
        )
    }
}
