import React, { Component } from "react";
import Square from "./Square";

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

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
      turn: 'playerOne',
      winningArr: [],
      turnCount: 0,
      overlay: false,
      tie: false,
    }
  }

  componentDidMount() {
    const { turn } = this.state;
    const { onSetTheTurnState } = this.props;
    onSetTheTurnState(turn);
  }

  move = (id) => {
    const { gameType } = this.state;
    const theMoveBoard = this.state.moveBoard;
    let turnCount = this.state.turnCount;
    const { onSetTheTurnState } = this.props;

    if (gameType === '1-player') {
      if (this.state.turn === 'playerOne' && this.isEmpty(id)) {
        theMoveBoard[id] = this.state.playerOneToken;
        if (!this.win() && !this.tie()) { 
          this.setState({ turn: 'computer', turnCount: turnCount += 1 }) 
          onSetTheTurnState('computer');
          setTimeout(() => {
            this.computerMove();
          }, 1000);
        } 
      } 
    } else {
      if (this.state.turn === 'playerOne' && this.isEmpty(id)) {
        theMoveBoard[id] = this.state.playerOneToken;
        if (!this.win()) { this.setState({ turn: 'playerTwo', turnCount: turnCount += 1 }) };
        onSetTheTurnState('playerTwo');
      } else if(this.state.turn === 'playerTwo' && this.isEmpty(id)) {
        theMoveBoard[id] = this.state.playerTwoToken;
        if (!this.win()) { this.setState({ turn: 'playerOne', turnCount: turnCount += 1  }) };
        onSetTheTurnState('playerOne');
      }
    }

    this.setState({ moveBoard: theMoveBoard });      
    setTimeout(() => {
      if (this.win()) {
        this.updateScore();
      } else if (this.tie()) {
      } 
    }, 1000);
  }

  // Check if square is available for a move
  isEmpty = (id) => {
    if (this.state.moveBoard[id] === ' ') {
      return true;
    } else {
      return false;
    }
  }

  // Render overlay
  renderOverlayBoard = (winner) => {
    const { tie } = this.state;
    let overlayText = '';
    if (tie) {
      overlayText = 'Tie Game';
    } else {
      switch(winner) {
        case ('playerOne'):
          overlayText = 'Player One Wins';
          break;
        case ('playerTwo'):
          overlayText = 'Player Two Wins';
          break;
        case ('computer'):
          overlayText = 'Computer Wins';
          break;
        default: 
          overlayText = '';
          break;
      }
    }
    
    return (
      <div className="overlay">
        <p className={tie ? 'tie' : winner}>{overlayText}!</p>
      </div>
    );
  }
 
  computerMove = () => {
    const { computerToken, playerOneToken } = this.state;
    const { onSetTheTurnState } = this.props;
    const arrayToBlock = this.closeToWin();
    const mBoard = this.state.moveBoard;
    let turnCount = this.state.turnCount;
    let computerIndex;

    // If playerOne is not close to winning
    if (arrayToBlock === undefined) {
      winningCombos.forEach(wc => {
        let index1 = wc[0];
        let index2 = wc[1];
        let index3 = wc[2];
        // If middle square is unoccupied, claim it first
        if (mBoard[4] === ' ') {
          computerIndex = 4;
          return;
        }
        // If two squares of a winning combo are selected, pick the third
        if (mBoard[index1] === computerToken && mBoard[index2] === computerToken && mBoard[index3] === ' ' ) {
          computerIndex = index3;
          return;
        } else if (mBoard[index1] === computerToken && mBoard[index2] === ' ' && mBoard[index3] === computerToken) {
          computerIndex = index2;
          return;
        } else if (mBoard[index1] === ' ' && mBoard[index2] === computerToken && mBoard[index3] === computerToken) {
          computerIndex = index1;
          return;
        }
        // If one square in a winning combo is selected, pick the adjacent
        if (mBoard[index1] === ' ' && mBoard[index2] === ' ' && mBoard[index3] === computerToken) {
          computerIndex = index2;
          return;
        } else if (mBoard[index1] === ' ' && mBoard[index2] === computerToken && mBoard[index3] === ' ') {
          computerIndex = index3;
          return;
        } else if (mBoard[index1] === computerToken && mBoard[index2] === ' ' && mBoard[index3] === ' ') {
          computerIndex = index2;
          return;
        }
        // If one square in a winning combo is selected by playerOne, pick the adjacent
        if (mBoard[index1] === ' ' && mBoard[index2] === ' ' && mBoard[index3] === playerOneToken) {
          computerIndex = index2;
          return;
        } else if (mBoard[index1] === ' ' && mBoard[index2] === playerOneToken && mBoard[index3] === ' ') {
          computerIndex = index3;
          return;
        } else if (mBoard[index1] === playerOneToken && mBoard[index2] === ' ' && mBoard[index3] === ' ') {
          computerIndex = index2;
          return;
        }
        // If no squares are occupied, pick one
        if (mBoard[index1] === ' ' && mBoard[index2] === ' ' && mBoard[index3] === ' ') {
          computerIndex = index3;
          return;
        }
      });
    } else  {
      // Update the strategy array
      arrayToBlock.forEach(i => {
        if (mBoard[i] === ' ') {
          computerIndex = i;
        }
      });
    }
    // Update the moveBoard
    mBoard[computerIndex] = computerToken;
    // Check for a win & tie
    setTimeout(() => {
      if (this.win()) {
        this.updateScore();
      } else if (this.tie()) {
      } else {
        this.setState({ moveBoard: mBoard, turnCount: turnCount += 1, turn: 'playerOne' });
        // Raise turn flag
        onSetTheTurnState('playerOne');
      }
    }, 1000);  
  }


  closeToWin = () => {
    const { playerOneToken, computerToken } = this.state;
    let blockCombo;
    const mBoard = this.state.moveBoard;
    // If playerOne occupies two squares in a winning combo return that combo
    winningCombos.forEach(wc => {
      let counter = 0;
      wc.forEach(i => {
        if (mBoard[i] === playerOneToken) {
          counter += 1;
        } else if (mBoard[i] === computerToken) {
          counter -= 1;
        }
      });
      if (counter === 2) {
        blockCombo = wc; 
        return;
      }
    });
    return blockCombo;
  }

  win = () => {
    const { moveBoard } = this.state;
    let win = false;
    winningCombos.forEach(wc => {
      const index1 = wc[0];
      const index2 = wc[1];
      const index3 = wc[2];
      if ((moveBoard[index1] === 'X' && moveBoard[index2] === 'X' && moveBoard[index3] === 'X') || 
        (moveBoard[index1] === 'O' && moveBoard[index2] === 'O' && moveBoard[index3] === 'O')) {
        win = true;
        this.setState({ winningArr: wc, overlay: true });
        setTimeout(() => {
          this.setState({ overlay: false });
        }, 1000);
      }
    });
    return win;
  }

  tie = () => {
    const { turnCount } = this.state;
    if (turnCount === 8 && !this.win('X') && !this.win('O')) {
      this.setState({ tie: true, overlay: true });
      setTimeout(() => {
        this.setState({ overlay: false });
        this.reset();
      }, 1000);
      return true;
    } else {
      return false;
    }
  }

  updateScore = () => {
    const { onSetScore, scores } = this.props;
    const { winner } = this.state;
    // Make copy of scores
    const theScores = scores;
    if (winner === 'playerOne') {
      theScores.playerOne = theScores.playerOne += 1;
    } else if (winner === 'playerTwo') {
      theScores.playerTwo = theScores.playerTwo += 1;
    } else {
      theScores.computerPlayer = theScores.computerPlayer += 1;
    }
    // Pass updated theScores object to onSetScore
    onSetScore(theScores);
    // Reset board with delay
    setTimeout(() => {
      this.reset();
    }, 1000); 
  } 

  reset = () => {
    const { turn } = this.state;
    const { onSetTheTurnState } = this.props;
    // Reset board, turn, turnCount
    this.setState({ 
      moveBoard: [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' ', ' '
      ],
      turn: 'playerOne',
      turnCount: 0,
      tie: false,
    }); 
    // Reset turn flag
    onSetTheTurnState(turn);
  }

  render() {
    const { moveBoard, overlay, turn } = this.state;
    return (
      <div className="play-area chalkboard">
        {overlay && this.renderOverlayBoard(turn)}
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

