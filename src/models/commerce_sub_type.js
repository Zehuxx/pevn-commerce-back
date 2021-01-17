const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const commerceType = require('./commerce_type');

const commerceSubType = sequelize.define('commerce_sub_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_ct: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
});

//OPCIONAL -- LAS RELACIONES SE PUEDEN HACER DE ESTA FORMA O CREAR EL index.js Y RELACIONAR
// LOS MODELOS AHI

//UN TIPO DE COMERCIO SE DIVIDE EN MUCHOS TIPOS DE SUB COMERCIOS
//commerceType.hasMany(commerceSubType, { as: 'commercesubtype', foreignKey: 'id_ct' });
//UN TIPO DE SUB COMERCIO PERTENECE A UN SOLO TIPO DE COMERCIO
//commerceSubType.belongsTo(commerceType, { as: 'commercetype', foreignKey: 'id_ct' });


module.exports = commerceSubType;