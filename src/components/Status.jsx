import React, { Component } from "react";

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // TODO: create function to render individual divs
  render() {
    return(
      <div className="status">
        <div className="turn">
          <h3 id="player1-turn">Go Player 1!</h3>
        </div>
        <div className="turn">
          <h3 id="player2-turn">Go Player 2!</h3>
        </div>
        <div className="turn">
          <h3 id="computer-turn">Computer!</h3>
        </div>
      </div>
    )
  }
}

export default Status;