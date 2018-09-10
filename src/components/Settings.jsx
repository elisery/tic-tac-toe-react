import React, { Component } from "react";
import Scoreboard from './Scoreboard';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className="settings">
        <Scoreboard />
        {/* Reset button */}
        <div className="controls">
          <button id="reset">Reset</button>
        </div>
      </div>
    )
  }
}

export default Settings;