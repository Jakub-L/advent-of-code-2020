const {
  findJoltDiffs,
  treeCombinations,
  arrayCombinations,
} = require('./utils');
const input = require('../../inputs/day-10.json');

function main() {
  const p1 = findJoltDiffs(input);
  console.log(`Part 1: ${p1[1] * p1[3]}`);
  console.log(`Part 2 (tree):  ${treeCombinations(input)}`);
  console.log(`Part 2 (array): ${arrayCombinations(input)}`);
}

main();
