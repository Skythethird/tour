const mongoose = require('mongoose');
const Bus = require('./models/bus');

const data = [
    {
       busnum: "CM2502",
        depart: "07:00",
        atime: "10h 30m",
        price: "823"
    },
   
]
function seedDB(){
    Bus.remove({}, function(err){
        if(err) {
            console.log('Remove database error');
        }
        console.log('Drop database success');
        data.forEach(function(seed){
            Bus.create(seed, function(err, tarot){
                if(err){
                    console.log(err);
                } else {
                    console.log('Added a bus');
                }
            });
        });
    });
}

module.exports = seedDB;