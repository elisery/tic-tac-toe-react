import React from "react";
import Scoreboard from './Scoreboard';

const Settings = props => {
  const { onResetClick = () => {}, gameType } = props;
  // console.log('settings', gameType);
  return(
    <div className="settings">
      <Scoreboard gameType={gameType} />
      <div className="controls">
        <button onClick={() => onResetClick()} id="reset">Reset</button>
      </div>
    </div>
  )
  
}

export default Settings;