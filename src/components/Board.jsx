import React, { Component } from "react";
import Settings from "./Settings";
import PlayBoard from "./PlayBoard";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  /*
  1. if no player choice set render player choice screen
  2. next if no x or o choice set render token choice screen
  3. else render playboard
  */

  render() {
    return(
      <div className="board main-shadow">
        <Settings />
        <PlayBoard />
      </div>
    )
  }
}

export default Board;