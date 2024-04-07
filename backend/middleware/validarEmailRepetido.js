const { pool } = require('../db/config.js');
const validarEmailRepetido = async (req, res, next) => {
  try {
    const users = req.body;
    const consulta = {
      text: 'SELECT * FROM usuarios WHERE email = $1',
      values: [users.email],
    }
    const resultado = await pool.query(consulta);
    if (resultado.rows.length > 0) {
      return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
    }

    next();
  } catch (error) {
    console.error('Error al buscar usuario por correo electrónico:', error);
    throw new Error('Error al buscar usuario por correo electrónico');
  }

}

module.exports = { validarEmailRepetido };