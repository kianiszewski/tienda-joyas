const express = require('express');
const router = express.Router();
const { getJoyas, getJoyasFiltradas } = require('../controllers/joyasController');

// Separador
router.get('/joyas', getJoyas);

// Separador
router.get('/joyas/filtros', getJoyasFiltradas);

module.exports = router;
