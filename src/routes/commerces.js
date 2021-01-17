const { Router } = require('express');
const { getAllCommerces, createCommerce, getCommerceById, updateCommerce, deleteCommerce } = require('../controllers/commerces')
const router = Router();

router.get('/', getAllCommerces);
router.post('/create/', createCommerce);
router.get('/:id', getCommerceById);
router.put('/', updateCommerce);
router.delete('/:id', deleteCommerce);

module.exports = router;