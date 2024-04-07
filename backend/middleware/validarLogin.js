const validarLogin = (req, res, next) => {
  const users = req.body;
  if (!users.email || !users.password) {
    return res.status(400).json({ error: "Falta el email o la contraseña" });
  }
  next();
}

module.exports = { validarLogin };