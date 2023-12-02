const fs = require('fs');

function parseGameInfo(gameLog) {
  const gameInfo = {};
  const logSplit = gameLog.split(':');
  gameInfo.id = Number.parseInt(logSplit[0].split(' ')[1]);
  gameInfo.sets = [];
  for (const setLog of logSplit[1].split(';')) {

    const drawSet = { r: 0, g: 0, b: 0 };
    for (const cubeDraw of setLog.split(',')) {

      const trimedDraw = cubeDraw.trim();
      const reds = trimedDraw.match(/(\d+) red/);
      const greens = trimedDraw.match(/(\d+) green/);
      const blues = trimedDraw.match(/(\d+) blue/);

      if (reds) drawSet.r += Number.parseInt(reds[1]);
      if (greens) drawSet.g += Number.parseInt(greens[1]);
      if (blues) drawSet.b += Number.parseInt(blues[1]);

    }
    gameInfo.sets.push(drawSet);
  }
  return gameInfo;
}

function getGamesLogsFromFile(path) {

  return fs.readFileSync(path, { encoding: 'utf-8' }).split('\r\n');
}

function getSetFromString(str) {

}

function isGamePossible(game, condition) {

}

module.exports.getGamesLogsFromFile = getGamesLogsFromFile;
module.exports.parseGameInfo = parseGameInfo;

/*******************************************************************************/

const INPUTFILE = './test-input.txt';
const GAMECONDITION = { r: 12, g: 13, b: 14 };

function main() {

  const games = getGamesLogsFromFile(INPUTFILE);
  const possibleGameIds = [];
  for (let game of games) {

    game = parseGameInfo(game);
    if (isGamePossible(game, GAMECONDITION)) possibleGameIds.push(game.id);
  }
  console.log(possibleGameIds);
}

main();