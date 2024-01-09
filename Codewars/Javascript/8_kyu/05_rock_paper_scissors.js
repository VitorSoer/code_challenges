/*
    - Let's play! You have to return which player won! In case of a draw return Draw!.
*/

const rps = (playerOne, playerTwo) => {
  const playerOneWins = 'Player 1 won!';
  const playerTwoWins = 'Player 2 won!';
  const draw = 'Draw!';

  const scenarios = {
    rock_vs_scissors: playerOneWins,
    paper_vs_rock: playerOneWins,
    scissors_vs_paper: playerOneWins,

    rock_vs_paper: playerTwoWins,
    paper_vs_scissors: playerTwoWins,
    scissors_vs_rock: playerTwoWins,

    rock_vs_rock: draw,
    paper_vs_paper: draw,
    scissors_vs_scissors: draw,
  };

  return scenarios[`${playerOne}_vs_${playerTwo}`];
};
