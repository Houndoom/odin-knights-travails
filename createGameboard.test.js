import createGameboard from './createGameboard';

const gameboard = createGameboard(8);

test('Create gameboard creates expected cells', () => {
  expect(gameboard[0][0]).toBeDefined();
  expect(gameboard[7][7]).toBeDefined();
  expect(gameboard[3][5]).toBeDefined();
  expect(gameboard[3][8]).toBeUndefined();
})

test('Movesets are correct', () => {
  expect(gameboard[0][0]).toEqual([[1, 2], [2, 1]]);
})