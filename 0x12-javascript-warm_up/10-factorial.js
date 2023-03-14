#!/usr/bin/node
const argv = require('process').argv;

const num = parseInt(argv[2]);

if (isNaN(num)) {
  console.log(1);
} else {
  const res = factorial(num);
  console.log(res);
}

function factorial (n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}
