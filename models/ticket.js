const mongoose = require('mongoose'),
      passportlocalMongoose = require('passport-local-mongoose');

let ticketSchema = new mongoose.Schema({
        uid : String,
        bnum : String,
        fname : String,
        lname : String,
        ID : String,
        seat : String,
        price : String,
        city1 : String,
        city2 : String,
        date : String,
        time : String
});
    
ticketSchema.plugin(passportlocalMongoose);
    
module.exports = mongoose.model('Ticket', ticketSchema);