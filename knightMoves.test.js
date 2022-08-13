import knightMoves from './knightMoves';

test('knight does not move', () => {
  expect(knightMoves([0, 0], [0, 0])).toEqual([[0,0]]);
})

test('knight moves one square', () => {
  expect(knightMoves([0, 0], [1, 2])).toEqual([[0, 0], [1, 2]]);
})

test('knight moves two squares', () => {
  expect(knightMoves([3, 3], [0, 0]).length).toBe(3);
})

test('knight moves more than two squares', () => {
  expect(knightMoves([0, 0], [2, 2]).length).toBe(5);
})

test('knight moves to or from invalid square', () => {
  expect(knightMoves([-1, 0], [2, 2])).toEqual([]);
  expect(knightMoves([7, 7], [8, 8])).toEqual([]);
})