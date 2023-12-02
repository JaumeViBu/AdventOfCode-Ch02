import { parseGameInfo } from '../CubeConundrum';

test('Can get info of first game of test-input.txt', () => {

  const givenData = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';
  const expected = { id: 1, sets: [{ r: 4, g: 0, b: 3 }, { r: 1, g: 2, b: 6 }, { r: 0, g: 2, b: 0 }] };
  console.log(parseGameInfo(givenData));
  expect(parseGameInfo(givenData)).toEqual(expected)
});

test('Can get info of all games of test-input.txt', () => {
  const givenData = [
    'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
    'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
    'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
    'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
    'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
  ];
  const expected = [
    { id: 1, sets: [{ r: 4, g: 0, b: 3 }, { r: 1, g: 2, b: 6 }, { r: 0, g: 2, b: 0 }] },
    { id: 2, sets: [{ r: 0, g: 2, b: 1 }, { r: 1, g: 3, b: 4 }, { r: 0, g: 1, b: 1 }] },
    { id: 3, sets: [{ r: 20, g: 8, b: 6 }, { r: 4, g: 13, b: 5 }, { r: 1, g: 5, b: 0 }] },
    { id: 4, sets: [{ r: 3, g: 1, b: 6 }, { r: 6, g: 3, b: 0 }, { r: 14, g: 3, b: 15 }] },
    { id: 5, sets: [{ r: 6, g: 3, b: 1 }, { r: 1, g: 2, b: 2 },] },
  ];

  for (let i = 0; i < givenData.length; i += 1) {

    expect(parseGameInfo(givenData[i])).toEqual(expected[i]);
  }
})