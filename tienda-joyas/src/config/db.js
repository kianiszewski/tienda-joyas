const { Pool } = require('pg');
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config();

// Configurar la conexión a la base de datos
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Verificar la conexión
pool.connect((err) => {
    if (err) {
        console.error('Error al conectar con la BDs', err);
    } else {
        console.log('Conexión exitosa a la BD');
    }
});

module.exports = pool;
