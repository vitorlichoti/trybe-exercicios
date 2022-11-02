module.exports = (req, res, next) => {
  const { description } = req.body;
  const { rating, difficulty, createdAt } = description;

  if (!description) {
    res.status(400).json({ message: "O campo description é obrigatório" });
  }

  if (!rating) {
    res.status(400).json({ message: "O campo rating é obrigatório" });
  }

  if (!difficulty) {
    res.status(400).json({ message: "O campo difficulty é obrigatório" });
  }

  if (!createdAt) {
    res.status(400).json({ message: "O campo createdAt é obrigatório" });
  }

  next();
};