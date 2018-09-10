import React, { Component } from "react";
import Game from "./Game";

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
        <Game />
      </div>
    )
  }
}

export default App;