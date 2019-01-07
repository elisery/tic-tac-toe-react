import React from "react";

const TokenChoice = props =>{
  const { onTokenClick = () => {} } = props;

  return (
    <div className="token-select chalkboard">
      <div className="message">
        <h2 id="two-player-message">Player 1</h2>
        <h2>Are you an X or an O?</h2>
      </div>
      <div className="options">
        <button onClick={() => onTokenClick('X')} className="token-choice" id="x-token">X</button>
        <button onClick={() => onTokenClick('O')} className="token-choice" id="o-token">O</button>
      </div>
      <div className="options">
        <button id="back"> &lt;- back</button>
      </div>
    </div>
  )
  
}

export default TokenChoice;