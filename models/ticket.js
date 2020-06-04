const mongoose = require('mongoose'),
      passportlocalMongoose = require('passport-local-mongoose');

let ticketSchema = new mongoose.Schema({
        username : String,
        password : String,
        email : String
});
    
ticketSchema.plugin(passportlocalMongoose);
    
module.exports = mongoose.model('Ticket', ticketSchema);