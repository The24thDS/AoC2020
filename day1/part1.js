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

let found = false;
let i = 0;

while (!found && i < inputArray.length) {
  const secondTerm = 2020 - inputArray[i];

  if (data[secondTerm] === true) {
    found = true;
    console.log(`found ${inputArray[i]} and ${secondTerm}`);
    console.log(`${inputArray[i]} * ${secondTerm} = ${inputArray[i] * secondTerm}`);
  }

  ++i;
}
