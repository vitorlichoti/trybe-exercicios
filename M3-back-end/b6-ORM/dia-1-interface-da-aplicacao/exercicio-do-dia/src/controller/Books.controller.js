const bookService = require('../service/Books.service');

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (_error) {
    return res.status(404).json({ message: 'Books Not Found' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await bookService.getById(Number(id));
    return res.status(200).json({ book });
  } catch (_e) {
    return res.status(404).json({ message: 'Book not found' });
  }
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  
  const bookCreated = await bookService.create({ title, author, pageQuantity });

  return res.status(201).json(bookCreated);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const updatedBook = await bookService.update(Number(id), { title, author, pageQuantity });

  if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

  return res.status(201).json({ message: 'Book Updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const idExist = await bookService.getById(id);
  if (!idExist) return res.status(404).json({ message: 'Book not found' });

  await bookService.remove(id);

  return res.status(200).json({ message: 'Book Deleted' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}