import { getPowerOfSetCubes } from "../CubeConundrum";

test('Can get the power of the set of cubes of the games in test-input.txt', () => {

  const givenData = [
    { id: 1, sets: [{ r: 4, g: 0, b: 3 }, { r: 1, g: 2, b: 6 }, { r: 0, g: 2, b: 0 }] },
    { id: 2, sets: [{ r: 0, g: 2, b: 1 }, { r: 1, g: 3, b: 4 }, { r: 0, g: 1, b: 1 }] },
    { id: 3, sets: [{ r: 20, g: 8, b: 6 }, { r: 4, g: 13, b: 5 }, { r: 1, g: 5, b: 0 }] },
    { id: 4, sets: [{ r: 3, g: 1, b: 6 }, { r: 6, g: 3, b: 0 }, { r: 14, g: 3, b: 15 }] },
    { id: 5, sets: [{ r: 6, g: 3, b: 1 }, { r: 1, g: 2, b: 2 },] },
  ];
  const expected = [
    48,
    12,
    1560,
    630,
    36,
  ];
  for (let i = 0; i < givenData.length; i += 1) {

    expect(getPowerOfSetCubes(givenData[i])).toBe(expected[i]);
  }
});