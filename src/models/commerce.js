const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const commerceSubType = require('./commerce_sub_type');

const commerce = sequelize.define('commerce', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cst: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fundation_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'createdat',
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'updatedat'
    }
});

//OPCIONAL -- LAS RELACIONES SE PUEDEN HACER DE ESTA FORMA O CREAR EL index.js Y RELACIONAR
// LOS MODELOS AHI

//EXISTEN MUCHOS COMERCIOS QUE PERTENECEN A UN TIPO DE SUB COMERCIO
//commerceSubType.hasMany(commerce, { as: 'commerce', foreignKey: 'id_cst' });
//UN COMERCIO SOLO PUEDE SER DE UN TIPO DE SUB COMERCIO
//commerce.belongsTo(commerceSubType, { as: 'commercesubtype', foreignKey: 'id_cst' });

module.exports = commerce;