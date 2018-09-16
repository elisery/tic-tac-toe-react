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
      playerTwoToken: ''
    }
    this.playerChoice = this.playerChoice.bind(this);
  }
  playerChoice(option) {
    console.log(option);
    this.setState({ gameType: 'option' });
  }
  /*
  1. if no player choice set render player choice screen ChoosePlayer
  2. next if no x or o choice set render token choice screen TokenChoice
  3. else render PlayBoard

   - OPTION: 
   1. make a "screens" component - and call it after <Settings />
   2. within settings - conditionally render chooseplayer, tokenchoice or playboard
  */
  render() {
    const { gameType, playerOneToken, playerTwoToken } = this.state;
    if (!gameType) {
      return(
        <ChoosePlayer onChoiceClick={this.playerChoice} />
      )
    } else if (!playerOneToken) {
      return(
        <TokenChoice />
      )
    } else {
      return(
        <PlayBoard />
      )
    }
    
  }
}

export default Screens;