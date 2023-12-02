const fs = require('fs');

function parseGameInfo(gameLog) {

}

function getGamesLogsFromFile(path) {
  return fs.readFileSync(path, { encoding: 'utf-8' }).split('\r\n');
}

function getSetFromString(str) {

}

function isGamePossible(game, condition) {

}

module.exports.getGamesLogsFromFile = getGamesLogsFromFile;

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