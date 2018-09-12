import React, { Component } from "react";


class PlayBoard extends Component {
  constructor(props) {
    super(props); 
    this.state = {

    }
  }
  render() {
    return(
      <div className="play-area chalkboard">
        <div id="row-1" class="row bottom-border">
          <div id="0" class="top-right-border square">
          </div>
          <div id="1" class="top-right-border square">
          </div>
          <div id="2" class="top-right-corner square">
          </div>
        </div>
        <div id="row-2" class="row bottom-border">
          <div id="3" class="right-border square">
          </div>
          <div id="4" class="right-border square">
          </div>
          <div id="5" class="square">
          </div>
        </div>
        <div id="row-3" class="row">
          <div id="6" class="bottom-right-border square">
          </div>
          <div id="7" class="bottom-right-border square">
          </div>
          <div id="8" class="bottom-right-corner square">
          </div>
        </div>
      </div>
    )
  }
}

export default PlayBoard;

