#!/usr/bin/node
const argv = require('process').argv;

if (isNaN(argv[2])) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parseInt(argv[2])}`);
}
