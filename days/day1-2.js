import { data } from '../data/day1.js';

let codes = data.split('\n');
let result = 0;
let regex = /(?:\d|one|two|three|four|five|six|seven|eight|nine)/g;

export function run() {
  const number = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  codes.forEach((row) => {
    const matches = row.match(regex);
    const firstNumber = matches[0];

    const first = number[firstNumber] || firstNumber;

    let lastNumber = false;
    let count = -1;

    while (lastNumber === false) {
      const testString = row.slice(count);
      if (testString.match(regex)) {
        lastNumber = testString.match(regex)[0];
      }
      count--;
    }

    const last = number[lastNumber] || lastNumber;
    const sum = parseInt(first + last);
    result += sum;
  });

  console.log(result);
}
