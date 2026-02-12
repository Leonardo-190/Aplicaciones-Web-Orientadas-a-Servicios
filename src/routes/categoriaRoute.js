const express = require('express');
const { obtenerCategoriaTron } = require('../controllers/externalController');
const router = express.Router();

router.get('/tron', obtenerCategoriaTron);

module.exports = router;
