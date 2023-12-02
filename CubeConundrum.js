import * as fs from 'fs'

export function parseGameInfo(gameLog) {
  const gameInfo = {};
  const logSplit = gameLog.split(':');
  gameInfo.id = Number.parseInt(logSplit[0].split(' ')[1]);
  gameInfo.sets = [];
  for (const setLog of logSplit[1].split(';')) {

    gameInfo.sets.push(getSetFromString(setLog));
  }
  return gameInfo;
}

export function getGamesLogsFromFile(path) {

  return fs.readFileSync(path, { encoding: 'utf-8' }).split('\r\n');
}

export function getSetFromString(str) {

  const drawSet = { r: 0, g: 0, b: 0 };
  for (const cubeDraw of str.split(',')) {

    const trimedDraw = cubeDraw.trim();
    const reds = trimedDraw.match(/(\d+) red/);
    const greens = trimedDraw.match(/(\d+) green/);
    const blues = trimedDraw.match(/(\d+) blue/);

    if (reds) drawSet.r += Number.parseInt(reds[1]);
    if (greens) drawSet.g += Number.parseInt(greens[1]);
    if (blues) drawSet.b += Number.parseInt(blues[1]);
  }
  return drawSet;
}

export function isGamePossible(game, condition) {
  // console.log(`Game id: ${game.id}`);
  // console.log(`Condition: ${JSON.stringify(condition).replace(/[{}"]/g, '').replace(/[:]/g, ': ').replace(/[,]/g, ', ')}`);
  for (const set of game.sets) {

    // console.log(set);
    if (set.r > condition.r) return false;
    if (set.g > condition.g) return false;
    if (set.b > condition.b) return false;
  }
  return true;
}

export function sumIdsListOfGames(list) {

  return list.reduce((acc, game) => acc + game.id, 0);
}

export function getMinCubesForGame(game) {
  const res = { id: game.id, minimumCubes: { r: 0, g: 0, b: 0 } };

  for (const set of game.sets) {

    if (set.r > res.minimumCubes.r) res.minimumCubes.r = set.r;
    if (set.g > res.minimumCubes.g) res.minimumCubes.g = set.g;
    if (set.b > res.minimumCubes.b) res.minimumCubes.b = set.b;
  }
  return res;
}

export function getPowerOfSetCubes(game) {

  const minCubes = getMinCubesForGame(game);
  const res = minCubes.minimumCubes.r * minCubes.minimumCubes.g * minCubes.minimumCubes.b;
  return res;
}

/*******************************************************************************/

// const INPUTFILE = './test-input.txt';
const INPUTFILE = './input.txt';
const GAMECONDITION = { r: 12, g: 13, b: 14 };

export function main() {

  const games = getGamesLogsFromFile(INPUTFILE);
  const possibleGames = [];
  const gameList = [];
  for (let game of games) {

    game = parseGameInfo(game);
    gameList.push(game);
    // console.log(getPowerOfSetCubes(game))
    if (isGamePossible(game, GAMECONDITION)) possibleGames.push(game);
  }
  console.log(`Sum: ${sumIdsListOfGames(possibleGames)}`);
  console.log(`Sum minCubes: ${gameList.reduce((acc, game) => acc + getPowerOfSetCubes(game), 0)}`)

}

main();