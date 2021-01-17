const { Sequelize } = require('sequelize');
const models = require('../models/index');

let createCommerce = async(req, res) => {
    try {
        let { id_cst, name, owner_name, address } = req.body;
        let commerce = await models.commerce.create({
            id_cst,
            name,
            owner_name,
            address
        });

        if (commerce) {
            res.status(200).json({ data: commerce, message: "Comercio creado exitósamente." });
        } else {
            res.status(500).json({ data: {}, message: "Error del servidor." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ data: {}, message: "Error del servidor." });
    }
}

let getAllCommerces = async(req, res) => {
    //OTRO FORMA DE HACER EL INCLUDE
    // include: [{
    //     model: models.commerceSubType,
    //     as: 'commercesubtype',
    //     include: [{
    //         model: models.commerceType,
    //         as: 'commercetype'
    //     }]
    // }]
    try {
        let commerces = await models.commerce.findAll({
            include: [{
                all: true,
                nested: true
            }],
            order: [
                ['id', 'ASC']
            ]
        });

        if (commerces) {
            res.status(200).json({ data: commerces });
        } else {
            res.status(204).json({ data: {}, message: "No se encontró información." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor." });
    }
}

let getCommerceById = async(req, res) => {
    try {
        let { id } = req.params;
        let commerce = await models.commerce.findByPk(id, {
            include: [{
                all: true,
                nested: true
            }],
            order: [
                ['id', 'ASC']
            ]
        });

        if (commerce) {
            res.status(200).json({ data: commerce });
        } else {
            res.status(404).json({ data: {}, message: "No se encontró información." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ data: {}, message: "Error del servidor." });
    }
}

let updateCommerce = async(req, res) => {
    try {
        let { id, id_cst, name, owner_name, address } = req.body;
        let commerce = await models.commerce.findOne({
            where: {
                id
            }
        });

        if (commerce) {
            let commerceUpdated = await commerce.update({
                id_cst,
                name,
                owner_name,
                address
            });

            if (commerceUpdated) {
                res.status(200).json({ data: commerceUpdated, message: "Comercio actualizado exitósamente." });
            } else {
                res.status(500).json({ data: {}, message: "Error del servidor." });
            }
        } else {
            res.status(404).json({ data: {}, message: "No se encontró información." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ data: {}, message: "Error del servidor." });
    }
}

let deleteCommerce = async(req, res) => {
    try {
        let { id } = req.params;
        let commerce = await models.commerce.destroy({
            where: {
                id
            }
        });

        if (commerce) {
            res.status(200).json({ message: "El comercio fue eliminado exitosamente." });
        } else {
            res.status(404).json({ message: "No se encontró información." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor." });
    }
}

module.exports = {
    createCommerce,
    getAllCommerces,
    getCommerceById,
    updateCommerce,
    deleteCommerce
}