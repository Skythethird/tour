const mongoose = require('mongoose');
const Bus = require('./models/bus');
const Seat = require('./models/seat');


const data = [
    {
        busnum: "111",
        city1 : 'Bangkok',
        city2: "Ayutthaya",
        depart: '07:00',
        arrive: '09:00',
        atime : '2h',
        price : '200',
        date : '2020-06-30',
        s1 : 'A1',
        s2 : 'B1',
        s3 : 'C1',
        s4 : 'A2',
        s5 : 'B2',
        s6 : 'C2',
        s7 : 'A3',
        s8 : 'B3',
        s9 : 'C3',
        s10 : 'A4',
        s11 : 'B4',
        s12 : 'C4',
        s13 : 'A5',
        s14 : 'B5',
        s15 : 'C5',
        s16 : 'A6',
        s17 : 'B6',
        s18 : 'C6',
        s19 : 'A7',
        s20 : 'B7',
        s21 : 'C7',
        
    },
    {
        busnum: "112",
        city1 : 'Bangkok',
        city2: "Ayutthaya",
        depart: '10:00',
        arrive: '12:00',
        atime : '2h',
        price : '200',
        date : '2020-06-30',
        s1 : 'A1',
        s2 : 'B1',
        s3 : 'C1',
        s4 : 'A2',
        s5 : 'B2',
        s6 : 'C2',
        s7 : 'A3',
        s8 : 'B3',
        s9 : 'C3',
        s10 : 'A4',
        s11 : 'B4',
        s12 : 'C4',
        s13 : 'A5',
        s14 : 'B5',
        s15 : 'C5',
        s16 : 'A6',
        s17 : 'B6',
        s18 : 'C6',
        s19 : 'A7',
        s20 : 'B7',
        s21 : 'C7',
    },
   
]
function seedDB(){
    Bus.remove({}, function(err){
        if(err) {
            console.log('Remove database error');
        }
        console.log('Drop database success');
        data.forEach(function(seed){
            Bus.create(seed, function(err, bus){
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