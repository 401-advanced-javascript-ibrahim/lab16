/* eslint-disable strict */
'use strict';

const events = require('./events.js');

events.on('read', payload => logger('read', payload));
events.on('error', payload => logger('error', payload));

function logger(events, payload) {
  let date = new Date();
  let currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date}`;
  let listeners = {
    events,
    currentDate,
    payload,
  };

  console.log('listeners =>', listeners);
}
module.exports = logger;