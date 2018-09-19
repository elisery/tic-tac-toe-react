import React, { Component } from "react";
import ChoosePlayer from "./ChoosePlayer";
import TokenChoice from "./TokenChoice";
import PlayBoard from "./PlayBoard";

class Screens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: '',
      playerOneToken: '', 
      playerTwoToken: '',
      computerToken: ''
    }
    this.playerChoice = this.playerChoice.bind(this);
    this.tokenChoice = this.tokenChoice.bind(this);
  }

  playerChoice(option) {
    this.setState({ gameType: option });
  }
  /*
  1. if no player choice set render player choice screen ChoosePlayer
  2. next if no x or o choice set render token choice screen TokenChoice
  3. else render PlayBoard

  RESET problem
  - pass states as props again, to Board component and call functions there
    instead of in Screens 
  - question: in Board, can you call three diff functions in one Screens component?
    - or call one function and within that function decide what state to set based
      on props passed
  */

  tokenChoice(option) {
    let secondOption = ''
    option === 'x-token' ? secondOption = 'o-token' : secondOption = 'x-token';

    if (this.state.gameType === '2-player') {
      this.setState({ playerTwoToken: secondOption });
    } else {
      this.setState({ computerToken: secondOption })
    }
    this.setState({ playerOneToken: option })
  }

  render() {
    const { gameType, playerOneToken } = this.state;
    if (!gameType) {
      return(
        <ChoosePlayer onChoiceClick={this.playerChoice} />
      )
    } else if (!playerOneToken) {
      return(
        <TokenChoice onTokenClick={this.tokenChoice} />
      )
    } else {
      return(
        <PlayBoard />
      )
    }
    
  }
}

export default Screens;