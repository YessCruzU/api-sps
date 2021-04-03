const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String   
});

// Model
const UserPost = mongoose.model('User', UserSchema);


module.exports =  UserPost;