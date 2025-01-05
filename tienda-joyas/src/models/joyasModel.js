const pool = require('../config/db');

// Separador: Consulta con filtros, paginación y ordenamiento
const obtenerJoyas = async ({ limit, offset, orderBy }) => {
    const consulta = `SELECT * FROM inventario ORDER BY ${orderBy} LIMIT $1 OFFSET $2`;
    const valores = [limit, offset];
    const { rows } = await pool.query(consulta, valores);
    return rows;
};

// Separador: Consulta para filtrar joyas por precio, categoría y metal
const filtrarJoyas = async ({ precioMin, precioMax, categoria, metal }) => {
    const consulta = `
        SELECT * FROM inventario
        WHERE precio BETWEEN $1 AND $2
        AND categoria = $3
        AND metal = $4
    `;
    const valores = [precioMin, precioMax, categoria, metal];
    const { rows } = await pool.query(consulta, valores);
    return rows;
};

module.exports = {
    obtenerJoyas,
    filtrarJoyas,
};
