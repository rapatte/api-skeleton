import { Router } from 'express';
import bookController from './controller';

const bookRouter = Router();

bookRouter.route('/books').get(bookController.getAll).post(bookController.add);

export default bookRouter;
