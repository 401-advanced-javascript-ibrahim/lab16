/* eslint-disable strict */
'use strict';

let textFile = `${__dirname}/src/data/test.txt`;

console.log('data', textFile);


process.argv[2] = textFile;