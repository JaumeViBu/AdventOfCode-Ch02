const isGamePossible = require('../CubeConundrum').isGamePossible;

test('Can check if first game of test-input.txt is possible', () => {
  const givenData = [
    { id: 1, sets: [{ r: 4, g: 0, b: 3 }, { r: 1, g: 2, b: 6 }, { r: 0, g: 2, b: 0 }] },
    { r: 12, g: 13, b: 14 },
  ];
  const expected = true;

  expect(isGamePossible(givenData[0], givenData[1])).toBeTruthy();
});

test('Can check if all games of test-input.txt are possible', () => {
  const givenData = [
    [
      { id: 1, sets: [{ r: 4, g: 0, b: 3 }, { r: 1, g: 2, b: 6 }, { r: 0, g: 2, b: 0 }] },
      { r: 12, g: 13, b: 14 },
    ],
    [
      { id: 2, sets: [{ r: 0, g: 2, b: 1 }, { r: 1, g: 3, b: 4 }, { r: 0, g: 1, b: 1 }] },
      { r: 12, g: 13, b: 14 },
    ],
    [
      { id: 3, sets: [{ r: 20, g: 8, b: 6 }, { r: 4, g: 13, b: 5 }, { r: 1, g: 5, b: 0 }] },
      { r: 12, g: 13, b: 14 },
    ],
    [
      { id: 4, sets: [{ r: 3, g: 1, b: 6 }, { r: 6, g: 3, b: 0 }, { r: 14, g: 3, b: 15 }] },
      { r: 12, g: 13, b: 14 },
    ],
    [
      { id: 5, sets: [{ r: 6, g: 3, b: 1 }, { r: 1, g: 2, b: 2 },] },
      { r: 12, g: 13, b: 14 },
    ],
  ];
  const expected = [
    true,
    true,
    false,
    false,
    true,
  ];

  for (let i = 0; i < givenData.length; i += 1) {

    expect(isGamePossible(givenData[i][0], givenData[i][1])).toBe(expected[i]);
  }

});
