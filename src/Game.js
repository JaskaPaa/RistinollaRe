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

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(0,0, 100, 100);
    ctx.fillRect(200,200, 100, 100);
  }

  render() {
    return(
      <div>
      <canvas ref="canvas" width={640} height={425} />
      </div>
    )
  }
}

export default Game;
