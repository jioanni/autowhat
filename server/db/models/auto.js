var db = require('../index');
var Sequelize = require('sequelize');

const auto = db.define('auto', {
    make: {
        type: Sequelize.STRING,
        allowNull: false
    },

    model: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = auto