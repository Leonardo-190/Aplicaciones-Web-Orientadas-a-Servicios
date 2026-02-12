const express = require('express');
const { poblarProductos, obtenerProductoCoot } = require('../controllers/externalController');
const router = express.Router();

router.post('/poblar', poblarProductos);
router.get('/coot', obtenerProductoCoot);

module.exports = router;