import { Router } from 'express';
import BooksController from '../controller/book.controller';

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);

router.get('books/:id', booksController.getById);

router.post('/books', booksController.create);

export default router;