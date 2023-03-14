#!/usr/bin/node
const argv = require('process').argv;

const size = parseInt(argv[2]);
if (isNaN(argv[2])) {
  console.log('Missing size');
} else {
  let i = 0;
  while (i < size) {
    let j = 0;
    const row = [];
    while (j < size) {
      row.push('X');
      j++;
    }
    console.log(row.join(''));
    i++;
  }
}
