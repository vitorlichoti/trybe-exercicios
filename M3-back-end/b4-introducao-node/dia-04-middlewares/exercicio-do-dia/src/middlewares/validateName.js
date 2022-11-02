module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name.length > 4) {
    next();
  };

  if (!name) {
    res.status(400).send({ message: 'O campo name é obrigatório' });
  }

  res.status(400).send({ message: 'O campo name deve ter pelo menos 4 caracteres' });
};