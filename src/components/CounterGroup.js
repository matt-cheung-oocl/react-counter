import React, { Component } from "react";
import Counter from "./Counter";
import CounterApi from "../apis/CounterApi";
import {
  INIT_COUNTER_SIZE,
  INIT_COUNTER_GROUP_SUM
} from "../constants/constants";
import { Input, Row, Card, Col, Space } from "antd";
import "antd/dist/antd.css";

export default class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onCalculate = this.onCalculate.bind(this);

    this.state = {
      size: INIT_COUNTER_SIZE,
      sum: INIT_COUNTER_GROUP_SUM
    };
  }

  componentDidMount() {
    CounterApi.getCounterSize().then(response => {
      const size = response.data.size;
      this.setState({ size: size });
    });
  }

  initArray(size) {
    return Array.from(Array(size).keys());
  }

  onCalculate(delta) {
    this.setState(prevState => ({ sum: prevState.sum + delta }));
  }

  onChange(event) {
    const value = event.target.value;
    this.setState({
      size: value.length > 0 ? parseInt(value) : INIT_COUNTER_SIZE,
      sum: INIT_COUNTER_GROUP_SUM
    });
    CounterApi.updateCounterSize(value).then(response => {
      console.log(response.data.size);
    });
  }

  render() {
    let counters = this.initArray(this.state.size);
    return (
      <Space direction="vertical">
        <form>
          <Card
            title="Counter by React.js"
            style={{ height: 160, background: "grey", color: "white" }}
          >
            Generate{" "}
            <Input
              size="small"
              style={{ width: "10%" }}
              onChange={this.onChange}
              type="text"
              value={this.state.size}
            />{" "}
            Counters
            <p>
              Sum of All Counters:{" "}
              <b>
                <i>{this.state.sum}</i>
              </b>
            </p>
          </Card>
        </form>
        {counters.map(value => (
          <Row justify="space-around" align="middle">
            <Col span={4}>
              <Counter
                key={value}
                number={this.state.number}
                onCalculate={this.onCalculate}
              />
            </Col>
          </Row>
        ))}
      </Space>
    );
  }
}
