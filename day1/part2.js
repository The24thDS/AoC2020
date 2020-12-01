const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/input`).toString();

const inputArray = [];
const data = {};

input.split('\n').forEach((item) => {
  if (item !== '') {
    inputArray.push(Number(item));
    data[item] = true;
  }
});

const findTerms = (total, array) => {
  let i = 0;

  while (!found && i < array.length) {
    const secondTerm = total - array[i];

    if (data[secondTerm] === true) {
      return [array[i], secondTerm];
    }

    ++i;
  }

  return false;
};

let found = false;
let i = 0;

while (!found && i < inputArray.length) {
  const tempTerm = 2020 - inputArray[i];

  const terms = findTerms(tempTerm, inputArray);

  if (terms !== false) {
    found = true;
    console.log(`found ${inputArray[i]} and ${terms.join(', ')}`);
    console.log(`${inputArray[i]} * ${terms.join(' * ')} = ${inputArray[i] * terms[0] * terms[1]}`);
  }

  ++i;
}
