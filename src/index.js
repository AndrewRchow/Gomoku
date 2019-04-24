import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {


  render() {
    let isWinningSquare = false;
    if (this.props.winSeq) {
      isWinningSquare = elementInArray(this.props.keyProp, this.props.winSeq);
    }

    return (
      <button
        className={'square ' + (isWinningSquare ? 'winningSquare' : '')}
        onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square
      key={i} keyProp={i}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      winSeq={this.props.winSeq} />;
  }

  render() {
    var boardSquares = [];
    var boardSquaresRow = [];
    for (var i = 0; i < 225; i++) {
      if (i % 15 == 0 && i != 0) {
        boardSquares.push(<div className="board-row">{boardSquaresRow}</div>);
        boardSquaresRow = [];
      }
      boardSquaresRow.push(this.renderSquare(i));
    }
    return (
      <div>
        {boardSquares}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(225).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
      isDraw: false
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      isDraw: history.length === 225 ? true : false
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      isDraw: false
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const isDraw = this.state.isDraw;

    const moves = history.map((step, move) => {
      const desc = move ?
        '#' + move :
        // 'Go to move #' + move :
        'Begin';
      // 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner.player;
    } else if (isDraw) {
      status = 'Draw';
    }
    else {
      status = 'Next: ' + (this.state.xIsNext ? 'X' : 'O');
      // status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winSeq={winner.sequence} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  var squaresArray = [];
  var squaresRow = [];
  var winner;
  for (var i = 0; i < squares.length; i++) {
    if (i % 15 == 0 && i != 0) {
      squaresArray.push(squaresRow);
      squaresRow = [];
    }
    squaresRow.push(squares[i]);
  }

  for (var i = 0; i < squaresArray.length; i++) {
    for (var j = 0; j < squaresArray[i].length; j++) {
      if (squaresArray[i][j]) {
        winner = findFiveInARow(squaresArray, i, j);
        if (winner) {
          return winner;
        }

      }
    }
  }
  return "";
}

function findFiveInARow(matrix, row, column) {
  var selected = matrix[row][column];
  var sequence = [];
  var win;
//Horizontal right
  for (var i = 0; i < 5; i++) {
    if (0>column-5 || selected != matrix[row][column-i]) {
      sequence = [];
      win = false;
      break;
    }
    sequence.push(((row + 1) * (column + 1-i))-1);
    win = true;
  }
//Vertical 
  if (!win) {
    for (var i = 0; i < 5; i++) {
      if (0 > column-5 || selected != matrix[row][column-i]) {
        sequence = [];
        win = false;
        break;
      }
      sequence.push(((row+1) * (column+1-i))-1);
      win = true;
    }
  }
//Diagonal Q13
  if (!win) {
    for (var i = 0; i < 5; i++) {
      if (0 > column-5 || selected != matrix[row][column-i]) {
        sequence = [];
        win = false;
        break;
      }
      sequence.push(((row+1) * (column+1-i))-1);
      win = true;
    }
  }
//Diagonal Q24
  if (!win) {
    for (var i = 0; i < 5; i++) {
      if (0 > column-5 || selected != matrix[row][column-i]) {
        sequence = [];
        win = false;
        break;
      }
      sequence.push(((row+1) * (column+1-i))-1);
      win = true;
    }
  }


  if (win) {
    console.log(selected);
    return selected;
  } else {
    return "";
  }
}

function elementInArray(index, array) {
  if (array.includes(index)) {
    return true;
  } else {
    return false;
  }
}
