import React, { Component } from "react";
import Square from "./Square";

class PlayBoard extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      moveBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      winningCombos: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ],
      turn: 'playerOne',
      winningArr: []
    }

  }
  render() {
    const { gameType, playerOneToken } = this.props;

    return(
      <div className="play-area chalkboard">
        <div id="row-1" className="row bottom-border">
          <div id="0" className="top-right-border square">
            <Square />
          </div>
          <div id="1" className="top-right-border square">
          </div>
          <div id="2" className="top-right-corner square">
          </div>
        </div>
        <div id="row-2" className="row bottom-border">
          <div id="3" className="right-border square">
          </div>
          <div id="4" className="right-border square">
          </div>
          <div id="5" className="square">
          </div>
        </div>
        <div id="row-3" className="row">
          <div id="6" className="bottom-right-border square">
          </div>
          <div id="7" className="bottom-right-border square">
          </div>
          <div id="8" className="bottom-right-corner square">
          </div>
        </div>
      </div>
    )
  }
}

export default PlayBoard;

