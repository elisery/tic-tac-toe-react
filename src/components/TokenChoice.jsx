import React, { Component } from "react";

class TokenChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return(
      <div class="token-select chalkboard">
        <div class="message">
          <h2 id="two-player-message">Player 1</h2>
          <h2>Are you an X or an O?</h2>
        </div>
        <div class="options">
          <button class="token-choice" id="x-token">X</button>
          <button class="token-choice" id="o-token">O</button>
        </div>
        <div class="options">
          <button id="back"> &lt;- back</button>
        </div>
      </div>
    )
  }
}

export default TokenChoice;