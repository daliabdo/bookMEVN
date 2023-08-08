const express = require('express');
const router=express.Router();
const bookController = require('../controllers/bookController');


 

router.get('/',bookController.homepage);
router.post('/book',bookController.createBook);
router.get('/book/:id',bookController.getBookById);
router.get('/AllBooks',bookController.getAllBooks);
router.put('/book/:id',bookController.updateBook);
router.delete('/book/:id',bookController.deleteBook);


module.exports = router;
