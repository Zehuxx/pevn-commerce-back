const { Sequelize } = require('sequelize');
const models = require('../models/index');

let createCommerce = async(req, res) => {
    try {
        let { id_cst, name, owner_name, address, fundation_date } = req.body;
        let commerce = await models.commerce.create({
            id_cst,
            name,
            owner_name,
            address,
            fundation_date
        });

        if (commerce) {
            res.status(200).json({ commerce, message: "Comercio creado exitósamente." });
        } else {
            res.status(500).json({ message: "Error del servidor." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor." });
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
            res.status(200).json({ commerces });
        } else {
            res.status(204).json({ message: "No se encontró información." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor." });
    }
}

let getAllCommercesWithPagination = async(req, res) => {
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
        let { page, size } = req.params;
        let commerces = await models.commerce.findAndCountAll({
            limit: size,
            offset: page * size,
            include: [{
                all: true,
                nested: true
            }],
            order: [
                ['id', 'ASC']
            ]
        });

        if (commerces) {
            res.status(200).json(getPagingData(commerces, page, size));
        } else {
            res.status(204).json({ message: "No se encontró información." });
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
            res.status(200).json({ commerce });
        } else {
            res.status(404).json({ message: "No se encontró información." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor." });
    }
}

let updateCommerce = async(req, res) => {
    try {
        let { id, id_cst, name, owner_name, address, fundation_date } = req.body;
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
                address,
                fundation_date
            });

            if (commerceUpdated) {
                res.status(200).json({ commerce: commerceUpdated, message: "Comercio actualizado exitósamente." });
            } else {
                res.status(500).json({ message: "Error del servidor." });
            }
        } else {
            res.status(404).json({ message: "No se encontró información." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error del servidor." });
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

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: commerces } = data;
    const currentPage = page ? +page : 0;
    limit = (limit > 0) ? limit : 1;
    const totalPages = Math.ceil(totalItems / limit);
    console.log(limit);
    return { totalItems, commerces, totalPages, currentPage };
};

module.exports = {
    createCommerce,
    getAllCommerces,
    getAllCommercesWithPagination,
    getCommerceById,
    updateCommerce,
    deleteCommerce
}