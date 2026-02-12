const pool = require('../config/db');

const poblarProductos = async (req, res) => {
  try {
    const apiFetch = await fetch("http://fakestoreapi.com/products");
    const products = await apiFetch.json();

    let inserciones = 0;

    for (const product of products) {
      const { title, price, description, image } = product;
      const stock = Math.floor(Math.random() * 50) + 1;

      await pool.query(
        `INSERT INTO productos (nombre, precio, stock, descripcion, imagen_url)
         VALUES ($1, $2, $3, $4, $5)`,
        [title, price, stock, description, image]
      );

      inserciones++;
    }

    res.status(200).json({
      mensaje: "Carga masiva exitosa",
      cantidad: inserciones
    });

  } catch (error) {
    console.error("Error poblando productos:", error);
    res.status(500).json({ error: error.message });
  }
};

const obtenerProductoCoot = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM productos WHERE nombre ILIKE $1 OR descripcion ILIKE $1`,
      ['%coot%']
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obtenerCategoriaTron = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM categorias WHERE nombre ILIKE $1 OR descripcion ILIKE $1`,
      ['%tron%']
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { poblarProductos, obtenerProductoCoot, obtenerCategoriaTron };
