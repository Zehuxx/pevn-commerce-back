const { Sequelize } = require('sequelize');
const models = require('../models/index');

let getAllCommercesTypes = async(req, res) => {
    try {
        let commerceTypes = await models.commerceType.findAll({
            include: [{
                model: models.commerceSubType,
                as: 'commercesubtype',
            }],
            order: [
                ['id', 'ASC']
            ]
        });

        if (commerceTypes) {
            res.status(200).json({ commerceTypes });
        } else {
            res.status(204).json({ message: "No se encontró información." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor." });
    }
}

module.exports = {
    getAllCommercesTypes
}