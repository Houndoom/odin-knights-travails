import createGameboard from './createGameboard';

const knightMoves = (start, end) => {
  const size = 8;
  const gameboard = createGameboard(size);
  const valid = Array.from(Array(size).keys());

  let [a, b] = start;
  let [c, d] = end;
  if (!valid.includes(a) || !valid.includes(b) || !valid.includes(c) || !valid.includes(d)) return [];

  let currentPaths = [[start]];
  let nextPath;
  
  while (true) {
    nextPath = currentPaths.pop();
    [a, b] = nextPath[nextPath.length - 1]; // Last step in nextPath
    if (a === c && b === d) break;
    const newPaths = gameboard[a][b].map(step => [...nextPath, step]) // Extend nextPath by one step, for all valid steps
    currentPaths = [...newPaths, ...currentPaths]; // Queue new paths to current paths
  }

  return nextPath;

}

export default knightMoves;