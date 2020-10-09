import React, { Component } from "react";
import "./App.css";
import SmurfDisplay from './SmurfDisplay';
import SmurfForm from "./SmurfForm";

class App extends Component {

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <SmurfDisplay />
      </div>
    );
  }
}

export default App;
