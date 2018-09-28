import React, { Component } from "react";
import Square from "./Square";

class PlayBoard extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      gameType: this.props.gameType,
      playerOneToken: this.props.playerOneToken,
      playerTwoToken: '',
      computerToken: '',
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
    this.move = this.move.bind(this);
  }
  move(id) {
    console.log("the id", id)
    // const theMoveBoard = this.state.moveBoard;
    // theMoveBoard[id] = 
    // this.setState({ })
  }

  render() {
    const { moveBoard } = this.state;

    return(
      <div className="play-area chalkboard">
        <div id="row-1" className="row bottom-border">
          <div onClick={() => this.move(0)} id="0" className="top-right-border square">
            <Square val={moveBoard[0]} />
          </div>
          <div id="1" className="top-right-border square">
            <Square val={moveBoard[1]}/>
          </div>
          <div id="2" className="top-right-corner square">
            <Square val={moveBoard[2]}/>
          </div>
        </div>
        <div id="row-2" className="row bottom-border">
          <div id="3" className="right-border square">
            <Square val={moveBoard[3]}/>
          </div>
          <div id="4" className="right-border square">
            <Square val={moveBoard[4]}/>
          </div>
          <div id="5" className="square">
            <Square val={moveBoard[5]}/>
          </div>
        </div>
        <div id="row-3" className="row">
          <div id="6" className="bottom-right-border square">
            <Square val={moveBoard[6]}/>
          </div>
          <div id="7" className="bottom-right-border square">
            <Square val={moveBoard[7]}/>
          </div>
          <div id="8" className="bottom-right-corner square">
            <Square val={moveBoard[8]}/>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayBoard;

