import React, { Component } from "react";


class ChoosePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className="intro-screen chalkboard">
        <div className="intro message">
          <h2>How do you want to play?</h2>
        </div>
        <div className="options">
          <button className="player-choice" id="1-player">1 Player</button>
          <button className="player-choice" id="2-player">2 Players</button>
        </div>
      </div>
    )
  }
}

export default ChoosePlayer;