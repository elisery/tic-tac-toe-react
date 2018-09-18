import React from "react";
import Scoreboard from './Scoreboard';

const Settings = props => {
  const { onResetClick = () => {} } = props;
 
  return(
    <div className="settings">
      <Scoreboard />
      <div className="controls">
        <button onClick={() => onResetClick()} id="reset">Reset</button>
      </div>
    </div>
  )
  
}

export default Settings;