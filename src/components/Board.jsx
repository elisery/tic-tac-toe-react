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
      scores: {
        playerOne: 0, 
        playerTwo: 0, 
        computerPlayer: 0
      },
    }
  }

  setScore = (scoreObj) => {
    // Set scores
    this.setState({ scores: scoreObj });
  }

  playerChoice = (option) => {
    this.setState({ gameType: option });
  }

  tokenChoice = (option) => {
    let secondOption = ''
    option === 'X' ? secondOption = 'O' : secondOption = 'X';

    if (this.state.gameType === '2-player') {
      this.setState({ playerTwoToken: secondOption });
    } else {
      this.setState({ computerToken: secondOption })
    }
    this.setState({ playerOneToken: option })
  }

  setResetStatus = () => {
    const { resetFlag } = this.props;
    this.setState({ 
      gameType: '',
      playerOneToken: '', 
      playerTwoToken: '',
      computerToken: '',
      scores: {
        playerOne: 0, 
        playerTwo: 0, 
        computerPlayer: 0
      },
    });
    resetFlag(null);
  }

  render() {
    const { gameType, playerOneToken, playerTwoToken, computerToken, scores } = this.state;
    const { setTurnState } = this.props;
    return (
      <div className="board main-shadow">
        <Settings onResetClick={this.setResetStatus} gameType={gameType} scores={scores} />
        <Screens 
          onPlayerChoiceClick={this.playerChoice} 
          onTokenChoiceClick={this.tokenChoice}
          gameType={gameType} 
          playerOneToken={playerOneToken}
          playerTwoToken={playerTwoToken}
          computerToken={computerToken}
          scores={scores}
          setScore={this.setScore}
          onSetTurnState={setTurnState}
        />
      </div>
    )
  }
}

export default Board;