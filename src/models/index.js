const commerceSubType = require('./commerce_sub_type');
const commerceType = require('./commerce_type');
const commerce = require('./commerce');

//UN TIPO DE COMERCIO SE DIVIDE EN MUCHOS TIPOS DE SUB COMERCIOS
commerceType.hasMany(commerceSubType, { as: 'commercesubtype', foreignKey: 'id_ct' });
//UN TIPO DE SUB COMERCIO PERTENECE A UN SOLO TIPO DE COMERCIO
commerceSubType.belongsTo(commerceType, { as: 'commercetype', foreignKey: 'id_ct' });

//EXISTEN MUCHOS COMERCIOS QUE PERTENECEN A UN TIPO DE SUB COMERCIO
commerceSubType.hasMany(commerce, { as: 'commerce', foreignKey: 'id_cst' });
//UN COMERCIO SOLO PUEDE SER DE UN TIPO DE SUB COMERCIO
commerce.belongsTo(commerceSubType, { as: 'commercesubtype', foreignKey: 'id_cst' });

module.exports = {
    commerceSubType,
    commerceType,
    commerce
}