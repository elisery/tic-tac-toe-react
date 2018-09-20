import React, { Component } from "react";
import Settings from "./Settings";

import Screens from "./Screens";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.resetGame = this.resetGame.bind(this);
  }
  
  resetGame() {
   
  }

  render() {
    
    return (
      <div className="board main-shadow">
        <Settings onResetClick={this.resetGame}/>
        <Screens />
        
      </div>
    )
  }
}

export default Board;