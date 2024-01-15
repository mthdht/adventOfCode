import { data } from '../data/day1.js';

let codes = data.split('\n');
let result = 0;

export function run() {
  console.log(codes);

  codes.forEach((code) => {
    let numbers = code.match(/\d/g);
    result += parseInt(numbers[0] + numbers[numbers.length - 1]);
  });

  console.log(result); // 55816
}
