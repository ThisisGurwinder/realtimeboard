import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Graph from "./components/graph.js";
import RainbowCanvas from "./samples/rainbow_canvas.js";

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
    		<RainbowCanvas fullscreen={true} width="500" height="500" />
      </div>
    );
  }
}
