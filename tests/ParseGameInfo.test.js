const parseGameInfo = require('../CubeConundrum').parseGameInfo;

test('Can get info of first game of test-input.txt', () => {

  const givenData = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';
  const expected = { id: 1, sets: [{ r: 4, g: 0, b: 3 }, { r: 1, g: 2, b: 6 }, { r: 0, g: 2, b: 0 }] };
  console.log(parseGameInfo(givenData));
  expect(parseGameInfo(givenData)).toEqual(expected)
});