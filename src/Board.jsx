import React from 'react';
import { Box } from './Box';
import { calculateWinner } from "./calculateWinner";

//The central component which handles the state with an array of 9 values and the current players's turn.
export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xChance: true,
      winner: null,
      // winner : calculateWinner(this.squares),
    };
  }

  //The functions which handles the event triggered by clicking a box, toggles the player's turns and disbales the clicks if a winner is found. 
  updateBox(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
        return;
      }
    squares[i] = this.state.xChance ? 'X' : 'O';
    this.setState({
      squares,
      xChance: !this.state.xChance,
      winner : calculateWinner(squares)
    });
  }
  //function that passes on the value to the box component 
  renderBox(i) {
    return (<Box value={this.state.squares[i]} onClick={() => this.updateBox(i)  } />);
  }
  render() {
    if (this.state.winner) {
      var status = 'Winner: ' + this.state.winner;
    }

    const content = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(this.renderBox(j + i * 3));
      }
      content.push(<div>{row}</div>);
    }

    return (
      <div>
         <button onClick={() => window.location.reload(false)}>Reset</button>
        <div>{status}</div>
        {content}
      </div>
    );
  }
}
