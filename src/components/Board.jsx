import React, { Component } from "react";
import Settings from "./Settings";

import Screens from "./Screens";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  

  render() {
    
    
    return (
      <div className="board main-shadow">
        <Settings />
        <Screens />
        
      </div>
    )
  }
}

export default Board;