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
      winningArr: [],
      turnCount: 0
    }
    this.move = this.move.bind(this);
  }
  move(id) {
    const theMoveBoard = this.state.moveBoard;
    let turnCount = this.state.turnCount;
  
    if (this.state.gameType === '1-player') {
      if (this.state.turn === 'computer') {
        this.computerMove();
      } else {
        if (this.isEmpty(id)) {
          theMoveBoard[id] = this.state.playerOneToken;
          this.win(this.state.playerOneToken) ? console.log(this.state.winningArr) : this.setState({ turn: 'computer', turnCount: turnCount += 1 });
        }
      }
    } else {
      if (this.state.turn === 'playerOne' && this.isEmpty(id)) {
        theMoveBoard[id] = this.state.playerOneToken;
        this.win(this.state.playerOneToken) ? console.log(this.state.winningArr) : this.setState({ turn: 'playerTwo', turnCount: turnCount += 1 });
      } else if(this.state.turn === 'playerTwo' && this.isEmpty(id)) {
        theMoveBoard[id] = this.state.playerTwoToken;
        this.win(this.state.playerTwoToken) ? console.log(this.state.winningArr) : this.setState({ turn: 'playerOne', turnCount: turnCount += 1 });
      }
    }
    this.setState({ moveBoard: theMoveBoard });
    /*
    3. check if winning combo hit
    4. check if board full
    */
    
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
    0. check if board full 
    1. move where there is most chance of winning & block other player
      - checking if square is empty
      - check for win after moving if no win: 
    2. set turn to playerOne
    */
  }

  moveTasks() {
    /*
    1. set turn state
    2. increase turn count
    3. add move to board
    4. check for win
    5. check for tie

    */
  }

  win(token) {
    let win = false;
    const moveBoard = this.state.moveBoard;
    this.state.winningCombos.forEach(wc => {
      const index1 = wc[0];
      const index2 = wc[1];
      const index3 = wc[2];
      if (moveBoard[index1] === token && moveBoard[index2] === token && moveBoard[index3] === token) {
        win = true;
        this.setState({ winningArr: wc });
      }
    });
    return win;
  }

  tie() {
    if (this.state.turnCount === 9 && !this.win('X') && !this.win('O')) {
      return true;
    } else {
      return false;
    }
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

