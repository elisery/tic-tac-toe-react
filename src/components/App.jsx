import React, { Component } from "react";
import GameLayout from "./GameLayout";

import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {

    return(
      <div>
        <GameLayout />
      </div>
    )
  }
}

export default App;