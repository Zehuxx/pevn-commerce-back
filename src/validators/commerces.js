const { body, validationResult } = require('express-validator');
const { Sequelize } = require('sequelize');
const models = require('../models/index');

const createRules = () => [
    body('name')
    .isLength({ min: 5, max: 40 })
    .withMessage('El nombre del comercio debe de tener entre 5 y 40 caracteres'),
    body('owner_name')
    .isLength({ min: 5, max: 40 })
    .withMessage('El nombre del propietario debe de tener entre 5 y 40 caracteres'),
    body('address')
    .isLength({ min: 1, max: 100 })
    .withMessage('La Dirección debe de tener no mas de 100 caracteres'),
    body('commerceType')
    .isInt()
    .withMessage('Tipo de comercio debe ser un valor entero')
    .custom(async(id, { req }) => {
        let commerceType = await models.commerceType.findByPk(id, {
            include: [{
                model: models.commerceSubType,
                as: 'commercesubtype',
            }]
        });
        if (commerceType) {
            let commerceSubType = commerceType.commercesubtype.find((commerceSubType) => commerceSubType.id === req.body.id_cst);
            if (!commerceSubType)
                return Promise.reject('Tipo de sub comercio invalido');
        } else {
            return Promise.reject('Tipo de comercio invalido');
        }
    }),
    body('id_cst')
    .isInt()
    .withMessage('Sub tipo de comercio debe de ser un valor entero'),
    body('fundation_date')
    .isISO8601()
    .withMessage('Fecha de fundación no tiene un formato ISO8601 YYYY-MM-DD')
    .custom(date => {
        let fundation_date = new Date(date);
        let today = new Date();
        if (fundation_date > today) {
            return Promise.reject('La fecha de fundacion debe de ser menor o  igual a hoy');
        }
    })
]

const ValidateErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

module.exports = {
    create: [createRules(), ValidateErrors]
}