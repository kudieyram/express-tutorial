const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    name: { type: String, unique: true, minlength: 8, maxlength: 16},

    title: { type: String, unique: true, minlength: 6, maxlenth: 35},

    numberOfPages: { type: String, minlength: 100},

    bookISBN: { type: String, unique: true, },

    bookLikes: {type: String, },
})



const Author = mongoose.model('author', authorSchema)

module.exports = Author