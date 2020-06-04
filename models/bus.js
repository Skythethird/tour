const mongoose = require('mongoose');


let busSchema = new mongoose.Schema({
        city1 : String,
        city2: String,
        busnum: String,
        depart: String,
        atime : String,
        price : String
});

module.exports = mongoose.model('Bus', busSchema);