import Book from './model';

const bookController = {
    getAll: async ({ res, next }) => {
        try {
            const books = await Book.findAll();
            res.status(200).json(books);
        } catch (e) {
            next(e);
        }
    },
    add: async ({ req, res, next }) => {
        try {
            const book = await Book.create({ ...req.body });
            res.status(201).json(book);
        } catch (e) {
            next(e);
        }
    },
};

export default bookController;
