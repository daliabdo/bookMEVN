const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.'
  },
  author: {
    type: String,
    required: 'This field is required.'
  },
  isbn: {
    type: Number,
    
  },
  type: {
    type: String,
    required: 'This field is required.'
  },
  price: {
    type: Number,
    required: 'This field is required.'
  },
  current_stock: {
    type: Number,
    required: 'This field is required.'
  },
  available: {
    type: Boolean,
    required: 'This field is required.'
  },
  
});

module.exports = mongoose.model('Book', bookSchema);