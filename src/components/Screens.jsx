import React from "react";
import ChoosePlayer from "./ChoosePlayer";
import TokenChoice from "./TokenChoice";
import PlayBoard from "./PlayBoard";

const Screens = props => {
  const { 
    gameType, 
    playerOneToken, 
    playerTwoToken, 
    computerToken,
    scores,
    onPlayerChoiceClick = () => {}, 
    onTokenChoiceClick = () => {},
    setScore = () => {},
    onSetTurnState = () => {},
  } = props;

  if (!gameType) {
    return(
      <ChoosePlayer onChoiceClick={onPlayerChoiceClick} />
    )
  } else if (!playerOneToken) {
    return(
      <TokenChoice onTokenClick={onTokenChoiceClick} />
    )
  } else {
    return(
      <PlayBoard 
        gameType={gameType} 
        playerOneToken={playerOneToken} 
        playerTwoToken={playerTwoToken}
        computerToken={computerToken}
        scores={scores}
        onSetScore={setScore}
        onSetTheTurnState={onSetTurnState}
      />
    )
  }
}

export default Screens;