import React, { Component } from "react";
import Settings from "./Settings";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return(
      <div className="board main-shadow">
        <Settings />
      </div>
    )
  }
}

export default Board;