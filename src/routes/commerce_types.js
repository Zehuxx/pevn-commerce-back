const { Router } = require('express');
const { getAllCommercesTypes } = require('../controllers/commerces_types')
const router = Router();

router.get('/', getAllCommercesTypes);

module.exports = router;