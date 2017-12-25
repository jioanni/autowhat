var db = require('../index');
var Sequelize = require('sequelize');

const customer = db.define("customer", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    zip: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validator: {
            min: 0,
            max: 99999
        }
    },

    fullName: {
        type: Sequelize.VIRTUAL,
        get() {
            return this.getDataValue("firstName") + " " + this.getDataValue("lastName")
        }
    }
})

module.exports = customer