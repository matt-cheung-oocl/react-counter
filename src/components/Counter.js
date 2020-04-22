import React, { Component } from "react";
import {
  INIT_COUNTER_VALUE,
  COUNTER_INCREMENT,
  COUNTER_DECREMENT
} from "../constants/constants";
import { Button, Space, Tag } from "antd";
import "antd/dist/antd.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);

    this.state = {
      value: INIT_COUNTER_VALUE
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.number !== prevProps.number) {
      this.setState({ value: INIT_COUNTER_VALUE });
    }
    if (this.state.value != prevState.value) {
      this.props.onCalculate(this.state.value - prevState.value);
    }
  }

  onIncrease() {
    this.setState(prevState => ({
      value: prevState.value + COUNTER_INCREMENT
    }));
  }

  onDecrease() {
    this.setState(prevState => ({
      value: prevState.value + COUNTER_DECREMENT
    }));
  }

  render() {
    return (
      <Space>
        <Button shape="circle" type="default" onClick={this.onDecrease}>
          -
        </Button>
        <Space>{this.state.value}</Space>
        <Button shape="circle" type="primary" onClick={this.onIncrease}>
          +
        </Button>
      </Space>
    );
  }
}
