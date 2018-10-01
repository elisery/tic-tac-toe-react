import React, { Component } from "react";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTwoLabel: 'computer', 
      game: this.props.gameType
    }
  }
  
  render() {
    console.log('scoreboardprops', this.state.game);
    // console.log(this.props);
    if (this.state.gameType === '2-player') {
      this.setState({ playerTwoLabel: 'player 2' });
    }

    const { playerTwoLabel } = this.state
    return(
      <div className="scores">
        <div id="player">
          <h5 id="score1">player 1:&nbsp;</h5><h5 id="score1num">0</h5>
        </div>
        <div id="separator">
          <h5>&nbsp;&nbsp;</h5>
        </div>
        <div id="computer">
          <h5 id="score2">{playerTwoLabel}:&nbsp;</h5><h5 id="score2num">0</h5>
        </div>
      </div>
    )
  }
}

export default Scoreboard;