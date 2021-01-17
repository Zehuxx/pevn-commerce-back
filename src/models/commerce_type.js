const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const commerceType = sequelize.define('commerce_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
});

module.exports = commerceType;