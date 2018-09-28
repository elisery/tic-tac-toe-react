import React, { Component } from "react";
import Square from "./Square";

class PlayBoard extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      gameType: this.props.gameType,
      playerOneToken: this.props.playerOneToken,
      playerTwoToken: this.props.playerTwoToken,
      computerToken: this.props.computerToken,
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
    console.log(id)
    /*
    1. set value in moveBoard & display on playboard
    2. check if playerone turn or player2/computer
    3. check if winning combo hit
    4. check if board full

    */
    const theMoveBoard = this.state.moveBoard;
    /*
    1. if turn is playerOne
    2. set moveboard to playerone token & turn: playerTwo
    3. else if two player set moveboard to playertwo token & turn: playerOne
    4. else if one player call computerMove function
  
    1. check for winning combo
     
    */
    if (this.state.gameType === '1-player') {
      if (this.state.turn === 'computer') {
        this.computerMove();
      } else {
        if (this.isEmpty(id)) {
          theMoveBoard[id] = this.state.playerOneToken;
          this.setState({ turn: 'computer' });
        }
      }
    } else {
      if (this.state.turn === 'playerOne' && this.isEmpty(id)) {
        theMoveBoard[id] = this.state.playerOneToken;
        this.setState({ turn: 'playerTwo' });
      } else if(this.state.turn === 'playerTwo' && this.isEmpty(id)) {
        theMoveBoard[id] = this.state.playerTwoToken;
        this.setState({ turn: 'playerOne' });
      }
    }
    this.setState({ moveBoard: theMoveBoard });
  }

  // Check if square is available for a move
  isEmpty(id) {
    if (this.state.moveBoard[id] === ' ') {
      return true;
    } else {
      return false;
    }
  }

  computerMove() {
    /*
    1. move where there is most chance of winning & block other player
      - checking if square is empty
    2. set turn to playerOne
    */
  }

  render() {
    const { moveBoard } = this.state;

    return(
      <div className="play-area chalkboard">
        <div id="row-1" className="row bottom-border">
          <div onClick={() => this.move(0)} id="0" className="top-right-border square">
            <Square val={moveBoard[0]} />
          </div>
          <div onClick={() => this.move(1)} id="1" className="top-right-border square">
            <Square val={moveBoard[1]}/>
          </div>
          <div onClick={() => this.move(2)} id="2" className="top-right-corner square">
            <Square val={moveBoard[2]}/>
          </div>
        </div>
        <div id="row-2" className="row bottom-border">
          <div onClick={() => this.move(3)} id="3" className="right-border square">
            <Square val={moveBoard[3]}/>
          </div>
          <div onClick={() => this.move(4)} id="4" className="right-border square">
            <Square val={moveBoard[4]}/>
          </div>
          <div onClick={() => this.move(5)} id="5" className="square">
            <Square val={moveBoard[5]}/>
          </div>
        </div>
        <div id="row-3" className="row">
          <div onClick={() => this.move(6)} id="6" className="bottom-right-border square">
            <Square val={moveBoard[6]}/>
          </div>
          <div onClick={() => this.move(7)} id="7" className="bottom-right-border square">
            <Square val={moveBoard[7]}/>
          </div>
          <div onClick={() => this.move(8)} id="8" className="bottom-right-corner square">
            <Square val={moveBoard[8]}/>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayBoard;

