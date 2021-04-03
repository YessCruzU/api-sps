const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const NoteSchema = new Schema({
    title: String,
    information: String,
    author: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

// Model
const NotePost = mongoose.model('Note', NoteSchema);

module.exports =  NotePost;