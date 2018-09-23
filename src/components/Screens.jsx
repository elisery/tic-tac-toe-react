import React from "react";
import ChoosePlayer from "./ChoosePlayer";
import TokenChoice from "./TokenChoice";
import PlayBoard from "./PlayBoard";

const Screens = props => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     gameType: '',
  //     playerOneToken: '', 
  //     playerTwoToken: '',
  //     computerToken: '',
  //     reset: props
  //   }
  //   this.playerChoice = this.playerChoice.bind(this);
  //   this.tokenChoice = this.tokenChoice.bind(this);
  // }

  // playerChoice(option) {
  //   this.setState({ gameType: option });
  // }

  
  /*

  RESET problem
  - pass states as props again, to Board component and call functions there
    instead of in Screens 
  - question: in Board, can you call three diff functions in one Screens component?
    - or call one function and within that function decide what state to set based
      on props passed
    -reset function must be in same component as where states are reset
  */

  // tokenChoice(option) {
  //   let secondOption = ''
  //   option === 'x-token' ? secondOption = 'o-token' : secondOption = 'x-token';

  //   if (this.state.gameType === '2-player') {
  //     this.setState({ playerTwoToken: secondOption });
  //   } else {
  //     this.setState({ computerToken: secondOption })
  //   }
  //   this.setState({ playerOneToken: option })
  // }

  
  // const { gameType, playerOneToken } = this.state;
  const { 
    gameType, 
    playerOneToken, 
    onPlayerChoiceClick = () => {}, 
    onTokenChoiceClick = () => {} 
  } = props;
  console.log(props);
  if (!gameType) {
    return(
      // <ChoosePlayer onChoiceClick={this.playerChoice} />
      <ChoosePlayer onChoiceClick={onPlayerChoiceClick} />
    )
  } else if (!playerOneToken) {
    return(
      // <TokenChoice onTokenClick={this.tokenChoice} />
      <TokenChoice onTokenClick={onTokenChoiceClick} />
    )
  } else {
    return(
      <PlayBoard />
    )
  }
  
  
}

export default Screens;