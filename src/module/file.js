/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

const fs = require('fs');
const events = require('./events.js');
const util = require('util');

const file = `${__dirname}/src/data/test.text`;

const readFile = util.promisify(fs.readFile);

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

const writeFile = util.promisify(fs.writeFile);

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