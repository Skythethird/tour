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
        s5 : String,
        s6 : String,
        s7 : String,
        s8 : String,
        s9 : String,
        s10 : String,
        s11: String,
        s12 : String,
        s13 : String,
        s14 : String,
        s15 : String,
        s16 : String,
        s17 : String,
        s18 : String,
        s19 : String,
        s20 : String,
        s21 : String,
});

module.exports = mongoose.model('Bus', busSchema);