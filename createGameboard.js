import Cell from './Cell';

const createGameboard = function(size) {
  const gameboard = [];

  const createMoveset = function(i, j) {
    const moveset = [[i + 1, j + 2], [i + 1, j - 2], [i - 1, j + 2], [i - 1, j - 2], [i + 2, j + 1], [i + 2, j - 1], [i - 2, j + 1], [i - 2, j - 1]];
    
    return moveset.filter(move => {
      const valid = Array.from(Array(size).keys());
      return valid.includes(move[0]) && valid.includes(move[1])
    })
  }

  for (let i = 0; i < size; i++) {
    gameboard[i] = [];
    for (let j = 0; j < size; j++) {
      gameboard[i][j] = createMoveset(i, j);
    }
  }
  return gameboard;
}

export default createGameboard;