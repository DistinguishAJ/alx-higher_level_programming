#!/usr/bin/node
const argv = require('process').argv;

if (argv.length <= 3) {
  console.log(0);
} else {
  const arr = [];
  for (let i = 2; i < argv.length; i++) {
    arr.push(parseInt(argv[i]));
  }

  const index = arr.indexOf(Math.max(...arr));
  arr.splice(index, 1);
  const max = Math.max(...arr);
  console.log(max);
}
