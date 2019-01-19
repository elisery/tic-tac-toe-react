import React, { Component } from "react";
import Board from './Board';
import Status from './Status';

class GameLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className="container">
        <Status />
        <Board />
      </div>
    )
  }
}

export default GameLayout;