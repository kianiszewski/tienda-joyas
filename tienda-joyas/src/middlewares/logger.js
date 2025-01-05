const fs = require('fs');
const path = require('path');

// Separador
const logger = (req, res, next) => {
    const logPath = path.join(__dirname, '../../logs/requests.log');
    const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;

    fs.appendFile(logPath, logMessage, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo de log:', err);
        }
    });

    next();
};

module.exports = logger;
