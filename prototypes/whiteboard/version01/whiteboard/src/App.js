import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Graph from "./components/graph.js";

export default class App extends React.Component {
  render() {
    return (
      <Graph data={this.props.data} />
    )
  }
}