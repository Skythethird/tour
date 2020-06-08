const mongoose = require('mongoose');
const Bus = require('./models/bus');

const data = [
    {
        busnum: "111",
        city1 : 'Bangkok',
        city2: "Ayutthaya",
        depart: '07:00',
        arrive: '09:00',
        atime : '2h',
        price : '200'
    },
    {
        busnum: "112",
        city1 : 'Bangkok',
        city2: "Ayutthaya",
        depart: '10:00',
        arrive: '12:00',
        atime : '2h',
        price : '200'
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