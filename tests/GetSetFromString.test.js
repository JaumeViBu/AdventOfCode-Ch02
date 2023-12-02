const getSetFromString = require('../CubeConundrum').getSetFromString;

test('Can get set results object from test-input test', () => {

  const givenData = [
    ' 3 blue, 4 red',
    '1 red, 2 green, 6 blue',
    '2 green',
  ];
  const expected = [
    { r: 4, g: 0, b: 3 },
    { r: 1, g: 2, b: 6 },
    { r: 0, g: 2, b: 0 },
  ];
  for (let i = 0; i < givenData.length; i += 1) {
    expect(getSetFromString(givenData[i])).toEqual(expected[i]);

  }
});