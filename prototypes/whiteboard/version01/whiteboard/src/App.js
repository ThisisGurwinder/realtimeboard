import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Graph from "./components/graph.js";
import AxisSampleOne from "./samples/AxisSample1.js"

export default class App extends React.Component {
  state = {dataSetIndex: 0}

  selectDataset(event) {
    this.setState({
      dataSetIndex: event.target.value
    });
  }

  render() {
    let options = this.props.datasets.map((_, index) => {

      return <option key={index} value={index}>
                Dataset {index+1}
             </option>;
    });

    return (
      <div>
        <select
          value={this.state.dataSetIndex}
          onChange={this.selectDataset.bind(this)} >
          {options}
        </select>

        <Graph data={this.props.datasets[this.state.dataSetIndex]} />
        <AxisSampleOne fullscreen={true} width="500" height="500" />
      </div>
    );
  }
}
