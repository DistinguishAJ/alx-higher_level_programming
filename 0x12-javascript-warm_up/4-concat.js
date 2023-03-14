#!/usr/bin/node
const argv = require('process').argv;

const arg1 = argv[2] ? argv[2] : 'undefined';
const arg2 = argv[3] ? argv[3] : 'undefined';

console.log(arg1.concat(' is ', arg2));
