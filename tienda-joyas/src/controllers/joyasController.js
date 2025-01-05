const { obtenerJoyas, filtrarJoyas } = require('../models/joyasModel');

// Separador
const getJoyas = async (req, res) => {
    const { limits, page, order_by } = req.query;
    const offset = (page - 1) * limits;

    try {
        const joyas = await obtenerJoyas({
            limit: parseInt(limits),
            offset: parseInt(offset),
            orderBy: order_by || 'id',
        });

        const response = {
            totalJoyas: joyas.length,
            results: joyas.map((joya) => ({
                name: joya.nombre,
                href: `/joyas/joya/${joya.id}`,
            })),
        };

        res.json(response);
    } catch (error) {
        res.status(500).send('Error al obtener las joyas');
    }
};

// Separador
const getJoyasFiltradas = async (req, res) => {
    const { precio_min, precio_max, categoria, metal } = req.query;

    try {
        const joyas = await filtrarJoyas({
            precioMin: parseInt(precio_min),
            precioMax: parseInt(precio_max),
            categoria,
            metal,
        });

        res.json(joyas);
    } catch (error) {
        res.status(500).send('Error al filtrar las joyas');
    }
};

module.exports = {
    getJoyas,
    getJoyasFiltradas,
};
