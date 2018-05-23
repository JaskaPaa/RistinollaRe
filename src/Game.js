import React, { Component } from 'react';

import './Game.css';


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class Board extends React.Component {


  componentDidMount() {
    this.updateCanvas();
  }
  
  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
    const ctx = this.refs.board.getContext('2d');
    ctx.fillStyle = 'rgb(255, 165, ' + Math.floor(Math.random() * 255) +')';
    ctx.fillRect(e.clientX, e.clientY, 100, 100);

  }


  updateCanvas() {
    const ctx = this.refs.board.getContext('2d');
    ctx.fillRect(0,0, 100, 100);
    ctx.fillRect(200,200, 100, 100);
  }

  render() {
    return(
      <div>
      <canvas ref="board" width={500} height={500} onClick={this.handleClick} />
      </div>
    )
  }
}

export default Game;
