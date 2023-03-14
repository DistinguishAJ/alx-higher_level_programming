#!/usr/bin/node
const argv = require('process').argv;

const num1 = parseInt(argv[2]);
const num2 = parseInt(argv[3]);

add(num1, num2);

function add (a, b) {
  console.log(a + b);
}
