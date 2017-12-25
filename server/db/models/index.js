'use strict';

const db = require('../index');
const customers = require('./customer');
const dealers = require('./dealer');
const autos = require('./auto');

module.exports = db, customers, dealers, autos;