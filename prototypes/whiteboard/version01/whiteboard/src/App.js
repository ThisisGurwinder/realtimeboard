import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <BasicSvg />
          <BasicSvg />
        </p>
      </div>
    );
  }
}

const BasicSvg = () =>
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="blue"
      strokeWidth="4"
      fill="lightblue"
    />
  </svg>

export default App;
