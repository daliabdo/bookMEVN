require('../models/database');
const Book = require('../models/Book');


/**
 * App routes
 */
exports.homepage = async (req, res) => {
  try {

    res.status(200).send('hello thi sis homepage');
    //console.log('this is inside homepage')
    //res.render('hello ', { title: 'Cooking cc Blog made by node js ' ,books});
  } catch (error) {
    res.status(500).send({ message: error.message || "message occured" });
  }

}


exports.createBook = async (req, res) => {
  try {

    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }

}

//GET allbooks
exports.getAllBooks = async (req, res) => {
  try {

    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }

}


//GET getBookById
exports.getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;

    const book = await Book.findById(bookId);
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }

}


//POST updateBook
exports.updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;

    const book = await Book.findByIdAndUpdate(
      { _id: bookId },
      {
        name: 'sheappppp bbb',
        author: 'hemmadi'
      },
      {
        new: true
      }
    );
    console.log('updated well')
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }

}

//POST deleteBook
exports.deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;

    const book = await Book.findByIdAndDelete(bookId);
    console.log('deleted successfully')
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }

}