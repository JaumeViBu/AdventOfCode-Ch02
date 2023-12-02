const sumIdsListOfGames = require('../CubeConundrum').sumIdsListOfGames;

test('Can return the sum of ids of the games in a given list', () => {
  const givenData = [{ "id": 1, "sets": [{ "r": 4, "g": 0, "b": 3 }, { "r": 1, "g": 2, "b": 6 }, { "r": 0, "g": 2, "b": 0 }] }, { "id": 2, "sets": [{ "r": 0, "g": 2, "b": 1 }, { "r": 1, "g": 3, "b": 4 }, { "r": 0, "g": 1, "b": 1 }] }, { "id": 5, "sets": [{ "r": 6, "g": 3, "b": 1 }, { "r": 1, "g": 2, "b": 2 }] }];
  const expected = 8;
  expect(sumIdsListOfGames(givenData)).toBe(expected);
});