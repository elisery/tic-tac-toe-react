import React from "react";

const Scoreboard = props => {
  const { gameType, scores } = props;
  let theGame = gameType;
  let secondScore;
  
  theGame === '2-player' ? theGame = 'player 2' : theGame = 'computer';
  if (scores) {
    theGame === '2-player' ? secondScore = scores.playerTwo : secondScore = scores.computerPlayer;
  }

  return(
    <div className="scores">
      <div id="player">
        <h5 id="score1">player 1:&nbsp;</h5>{scores && <h5 id="score1num">{scores.playerOne}</h5>}
      </div>
      <div id="separator">
        <h5>&nbsp;&nbsp;</h5>
      </div>
      <div id="computer">
        <h5 id="score2">{theGame}:&nbsp;</h5><h5 id="score2num">{secondScore}</h5>
      </div>
    </div>
  )
}

export default Scoreboard;