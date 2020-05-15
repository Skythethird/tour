const mongoose = require('mongoose'),
      passportlocalMongoose = require('passport-local-mongoose');

let UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String
})

UserSchema.plugin(passportlocalMongoose);

module.exports = mongoose.model('User', UserSchema);