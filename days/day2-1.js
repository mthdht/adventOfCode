import { data } from '../data/day2.js';

let games = data.split('\n');
let result = 0;
let cubes = {
  green: 13,
  red: 12,
  blue: 14,
};

export function run() {
  games.forEach((game, index) => {
    let sets = game.split(': ')[1].split('; ');
    let setPossible = true;
    sets.forEach((set) => {
      let dices = set.split(', ');
      dices.forEach((dice) => {
        let couple = dice.split(' ');
        couple[0] > cubes[couple[1]] ? (setPossible = false) : null;
      });
    });
    setPossible ? (result += index + 1) : null;
  });

  console.log(result);
}
