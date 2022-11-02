module.exports = (req, res, next) => {
  const { difficulty } = req.body;

  if (difficulty !== 'Fácil' || difficulty !== 'Médio' || difficulty !== 'Difícil') {
    res.status(400).json({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  }
  
  next();
};