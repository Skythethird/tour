const mongoose = require('mongoose');
      

let receiptSchema = new mongoose.Schema({
     uid : String,
     bid : String,
     bnum : String, 
     image : String
});



module.exports = mongoose.model('receipt', receiptSchema);