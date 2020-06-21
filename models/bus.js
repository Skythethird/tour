const mongoose = require('mongoose');


let busSchema = new mongoose.Schema({
        busnum: String,
        city1 : String,
        city2: String,
        depart: String,
        arrive: String,
        atime : String,
        price : String,
        s1 : String,
        s2 : String,
        s3 : String,
        s4 : String,
});

module.exports = mongoose.model('Bus', busSchema);