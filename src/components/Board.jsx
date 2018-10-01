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
      computerToken: ''
    }
    this.setResetStatus = this.setResetStatus.bind(this);
    this.playerChoice = this.playerChoice.bind(this);
    this.tokenChoice = this.tokenChoice.bind(this);
  }

  playerChoice(option) {
    this.setState({ gameType: option });
  }

  tokenChoice(option) {
    let secondOption = ''
    option === 'X' ? secondOption = 'O' : secondOption = 'X';

    if (this.state.gameType === '2-player') {
      this.setState({ playerTwoToken: secondOption });
    } else {
      this.setState({ computerToken: secondOption })
    }
    this.setState({ playerOneToken: option })
  }

  setResetStatus() {
    this.setState({ 
      gameType: '',
      playerOneToken: '', 
      playerTwoToken: '',
      computerToken: ''
    });
  }

  render() {
    const { gameType, playerOneToken, playerTwoToken, computerToken } = this.state;
    return (
      <div className="board main-shadow">
        <Settings onResetClick={this.setResetStatus} gameType={gameType} />
        <Screens 
          onPlayerChoiceClick={this.playerChoice} 
          onTokenChoiceClick={this.tokenChoice}
          gameType={gameType} 
          playerOneToken={playerOneToken}
          playerTwoToken={playerTwoToken}
          computerToken={computerToken}
        />
      </div>
    )
  }
}

export default Board;