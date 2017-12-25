'use strict'

const chalk = require("chalk");
const Sequelize = require("sequelize");
const pkg = require("../../package.json");

console.log(chalk.green("Opening DB connection!"));

module.exports = new Sequelize(`postgres://localhost:5432/autowhat`, {
    logging: false
  });