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
// TODO: status has to recieve state/props of which player's turn it is
  setTurn = (turn) => {
    this.setState({ turn })
  }

  render() {
    const { turn } = this.state;

    return(
      <div className="container">
        <Status theTurn={turn} />
        <Board setTurnState={this.setTurn} />
      </div>
    )
  }
}

export default GameLayout;