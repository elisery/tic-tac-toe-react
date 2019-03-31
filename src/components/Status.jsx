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

/**
 * 1. gamelayout imports status (flag here)
 * 2. gamelayout also imports board
 * 3. board imports settings (reset button here)
 * 4. have state set in gamelayout with function setting it
 * 5. pass function as prop to board
 * 6. board imports the prop function and sets the state when the reset button clicked
 * 7. gamelayout sends this state to status
 * 8. status resets the flag
 * 
 */
class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderFlag = () => {
    const { theTurn } = this.props;
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
    return(
      <div className="status">
        {this.renderFlag()}
      </div>
    )
  }
}

export default Status;