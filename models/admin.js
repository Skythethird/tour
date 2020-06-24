const mongoose = require('mongoose'),
      passportlocalMongoose = require('passport-local-mongoose');

let adminSchema = new mongoose.Schema({
    username : String,
    password : String,
});

adminSchema.plugin(passportlocalMongoose);

module.exports = mongoose.model('admin', adminSchema);