import { data } from '../data/day2.js';

let games = data.split('\n');
let result = 0;

export function run() {
  games.forEach((game, index) => {
    let sets = game.split(': ')[1].split('; ');
    let cubes = {
      green: 0,
      red: 0,
      blue: 0,
    };
    sets.forEach((set) => {
      let dices = set.split(', ');
      dices.forEach((dice) => {
        let couple = dice.split(' ');
        parseInt(couple[0]) > cubes[couple[1]]
          ? (cubes[couple[1]] = parseInt(couple[0]))
          : null;
      });
    });
    result += cubes['green'] * cubes['blue'] * cubes['red'];
  });

  console.log(result);
}
