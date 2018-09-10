import React, { Component } from "react";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className="scores">
        <div id="player">
          <h5 id="score1">player 1:&nbsp;</h5><h5 id="score1num">0</h5>
        </div>
        <div id="separator">
          <h5>&nbsp;&nbsp;</h5>
        </div>
        <div id="computer">
          <h5 id="score2">computer:&nbsp;</h5><h5 id="score2num">0</h5>
        </div>
      </div>
    )
  }
}

export default Scoreboard;