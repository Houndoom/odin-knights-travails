const Cell = (array, moveset = null) => {
  let x;
  let y;
  [x, y] = array;
  return {x, y, moveset};
}

export default Cell;