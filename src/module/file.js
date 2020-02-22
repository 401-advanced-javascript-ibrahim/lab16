/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

const fs = require('fs');
const util = require('util');

const events = require('./events.js');
require('./logger.js');

const file = `${__dirname}/src/data/test.text`;
console.log('read',typeof fs.readFile);
const readFile = fs.readFiles;

const fileReader = (file) => {
  readFile(file, 'utf8')
    .then(data => {
      events.emit('read', 'read the file');
      let content = data.toUpperCase();
      fileEditor(content);
    })
    .catch(e => {
      events.emit('error', Promise.reject());
    });
};

const writeFile = fs.writeFile;

const fileEditor = (content) => {
  writeFile(file, content)
    .then(() => {
      events.emit('read', 'change the file content to upper case');
    })
    .catch(e => {
      events.emit('error', Promise.reject());
    });
};

module.exports = fileReader;