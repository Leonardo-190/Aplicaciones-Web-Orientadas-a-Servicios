const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productoRoute = require('./routes/productoRoute');
const categoriaRoute = require('./routes/categoriaRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/productos', productoRoute);
app.use('/api/categoria', categoriaRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servicio arriba en http://localhost:${PORT}`));
