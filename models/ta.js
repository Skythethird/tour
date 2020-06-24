const mongoose = require('mongoose');
      

let taSchema = new mongoose.Schema({
    pname : String,
    info : String,
    province : String,
    htg : String,
    activity : String,
    availability : String,
    image : String
});



module.exports = mongoose.model('ta', taSchema);