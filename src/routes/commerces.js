const { Router } = require('express');
const { getAllCommerces, getAllCommercesWithPagination, createCommerce, getCommerceById, updateCommerce, deleteCommerce } = require('../controllers/commerces')
const commerceValidator = require('../validators/commerces');
const router = Router();

router.get('/', getAllCommerces);
router.get('/:page/:size', getAllCommercesWithPagination);
router.post('/create/', commerceValidator.create, createCommerce);
router.get('/:id', getCommerceById);
router.put('/update/:id', updateCommerce);
router.delete('/:id', deleteCommerce);

module.exports = router;