import React, { Component } from "react";

const playerTurn = {
  "playerOne": {
    id: "player1-turn",
    message: "Player 1"
  },
  'playerTwo': {
    id: "player2-turn",
    message: "Player 2",
  },
  'computer': {
    id: "computer-turn",
    message: "Computer"
  },
}

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderFlag = () => {
    const { theTurn } = this.props;
//TODO: add logic below to get proper id for h3 tag
// playerOne playerTwo computer
    return (
      theTurn 
        && (
          <div className="turn">
            <h3 id={`${playerTurn[theTurn].id}`}>
              {`Go ${playerTurn[theTurn].message}!`}
            </h3>
          </div>
        )
    )
  }

  render() {
    console.log(this.props.theTurn)
    return(
      <div className="status">
        {this.renderFlag()}
      </div>
    )
  }
}

export default Status;