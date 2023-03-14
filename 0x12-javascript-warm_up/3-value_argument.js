#!/usr/bin/node
const argv = require('process').argv;

let i = 0;

argv.forEach((value) => {
  if (i === 2) {
    console.log(value);
  }
  i++;
});

if (i === 2) {
  console.log('No argument');
}
