import React, { Component } from "react";
import "./App.css";
import SmurfDisplay from './SmurfDisplay';
import SmurfForm from "./SmurfForm";

class App extends Component {

  render() {
    return (
      <div className="App">
        <SmurfDisplay />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
