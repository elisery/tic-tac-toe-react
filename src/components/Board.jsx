import React, { Component } from "react";
import Settings from "./Settings";

import Screens from "./Screens";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: '',
      playerOneToken: '', 
      playerTwoToken: '',
      computerToken: '',
      reset: false
    }
    this.setResetStatus = this.setResetStatus.bind(this);
  }
  
  setResetStatus() {
    this.state.reset ? this.setState({ reset: false }) : this.setState({ reset: true });
    this.resetGame();
    // console.log(this.state.reset)
  }
  /* 
  1. pass this.state to Screens component to render correct screen
  
  */
  resetGame() {
    if(this.state.reset) {
      this.setState({ 
        gameType: '',
        playerOneToken: '', 
        playerTwoToken: '',
        computerToken: '', 
        reset: false 
      });
    }
  }

  render() {
    const { reset } = this.state;
    return (
      <div className="board main-shadow">
        <Settings onResetClick={this.setResetStatus}/>
        <Screens resetStatus={this.state}/>
        
      </div>
    )
  }
}

export default Board;