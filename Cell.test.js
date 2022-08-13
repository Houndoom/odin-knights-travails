import Cell from './Cell';

test('Cell coordinates are correct', () => {
  let cell = Cell([1, 2]);
  expect(cell.x).toBe(1);
  expect(cell.y).toBe(2);
})