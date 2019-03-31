import React, { Component } from "react";
import Board from './Board';
import Status from './Status';

class GameLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: '',
    }
  }
  setTurn = (turn) => {
    this.setState({ turn })
  }

  render() {
    const { turn } = this.state;

    return(
      <div className="container">
        <Status theTurn={turn} />
        <Board setTurnState={this.setTurn} resetFlag={this.setTurn} />
      </div>
    )
  }
}

export default GameLayout;