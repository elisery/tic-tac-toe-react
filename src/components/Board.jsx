import React, { Component } from "react";
import Settings from "./Settings";
import ChoosePlayer from "./ChoosePlayer";
import TokenChoice from "./TokenChoice";
import PlayBoard from "./PlayBoard";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: '',
      playerOneToken: ''
    }
  }
  /*
  1. if no player choice set render player choice screen ChoosePlayer
  2. next if no x or o choice set render token choice screen TokenChoice
  3. else render PlayBoard
  */
  

  render() {
    return(
      <div className="board main-shadow">
        <Settings />
        <ChoosePlayer />
      </div>
    )
  }
}

export default Board;