import React from "react";
import Scoreboard from './Scoreboard';

const Settings = props => {
  const { onResetClick = () => {}, gameType, scores } = props;
  return(
    <div className="settings">
      <Scoreboard gameType={gameType} scores={scores} />
      <div className="controls">
        <button onClick={() => onResetClick()} id="reset">Reset</button>
      </div>
    </div>
  )  
}

export default Settings;