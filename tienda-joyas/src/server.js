const express = require('express');
const dotenv = require('dotenv');
const joyasRoutes = require('./routes/joyasRoutes');
const logger = require('./middlewares/logger'); // Importar el middleware

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger); // Usar el middleware de logging
app.use('/api', joyasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
