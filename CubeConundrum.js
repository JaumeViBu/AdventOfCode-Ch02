const fs = require('fs');

function parseGameInfo(gameLog) {
  const gameInfo = {};
  const logSplit = gameLog.split(':');
  gameInfo.id = Number.parseInt(logSplit[0].split(' ')[1]);
  gameInfo.sets = [];
  for (const setLog of logSplit[1].split(';')) {

    gameInfo.sets.push(getSetFromString(setLog));
  }
  return gameInfo;
}

function getGamesLogsFromFile(path) {

  return fs.readFileSync(path, { encoding: 'utf-8' }).split('\r\n');
}

function getSetFromString(str) {

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

function isGamePossible(game, condition) {
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

function sumIdsListOfGames(list) {

  return list.reduce((acc, game) => acc + game.id, 0);
}

module.exports.getGamesLogsFromFile = getGamesLogsFromFile;
module.exports.parseGameInfo = parseGameInfo;
module.exports.getSetFromString = getSetFromString;
module.exports.isGamePossible = isGamePossible;
module.exports.sumIdsListOfGames = sumIdsListOfGames;

/*******************************************************************************/

const INPUTFILE = './test-input.txt';
const GAMECONDITION = { r: 12, g: 13, b: 14 };

function main() {

  const games = getGamesLogsFromFile(INPUTFILE);
  const possibleGames = [];
  for (let game of games) {

    game = parseGameInfo(game);
    if (isGamePossible(game, GAMECONDITION)) possibleGames.push(game);
  }
  console.log(JSON.stringify(possibleGames));
}

main();