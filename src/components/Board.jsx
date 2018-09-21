import React, { Component } from "react";
import Settings from "./Settings";

import Screens from "./Screens";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reset: false
    }
    this.setResetStatus = this.setResetStatus.bind(this);
  }
  
  setResetStatus() {
    this.state.reset ? this.setState({ reset: false }): this.setState({ reset: true });
    
    // console.log(this.state.reset)
  }

  render() {
    const { reset } = this.state;
    return (
      <div className="board main-shadow">
        <Settings onResetClick={this.setResetStatus}/>
        <Screens resetStatus={reset}/>
        
      </div>
    )
  }
}

export default Board;