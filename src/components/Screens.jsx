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
    // console.log(option);
    let test = this.state.gameType;
    this.setState({ gameType: option });
    console.log('what', this.state.gameType);
  }
  /*
  1. if no player choice set render player choice screen ChoosePlayer
  2. next if no x or o choice set render token choice screen TokenChoice
  3. else render PlayBoard

   - OPTION: 
   1. make a "screens" component - and call it after <Settings />
   2. within settings - conditionally render chooseplayer, tokenchoice or playboard
  */

  tokenChoice(option) {
    let secondOption = ''
    option === 'x-token' ? secondOption = 'o-token' : secondOption = 'x-token';

    this.state.gameType === '2-player' ? 
      this.setState({ playerTwoToken: secondOption }) : 
      this.setState({ computerToken: secondOption })
    console.log('player one', this.state.playerOneToken);
    console.log('player two', this.state.playerOneToken);
    console.log('computer', this.state.computerToken);
  }

  render() {
    const { gameType, playerOneToken, playerTwoToken } = this.state;
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