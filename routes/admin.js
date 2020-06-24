const admin = require('../models/admin');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Bus = require('../models/bus');
const busfind = Bus.find({});
const path = require('path');
const middleware = require('../middleware');



router.get('/', function(req, res){
    res.render('index');
});

router.get('/signup', function(req, res){
    res.render('index2');
});


router.post('/login', passport.authenticate('local',{
    failureRedirect: 'login'
}),function(req, res){
    if (req.session.oldUrl){
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else {
        res.redirect('/admin');
    }
});


router.post('/signup', function(req, res){
    admin.register(new admin({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('login');
        }
        passport.authenticate('local')(req,res,function(){
            res.redirect('/admin');
        });
    });
});

router.get('/logout',function(req, res){
    req.logout();
    req.flash('success','You Logout');
    res.redirect('/');
});

router.get('/schedule',middleware.isloggedIn, function(req, res){
    Bus.find({},function(error, allBus){
        if(error){
            console.log("Error!");
        } else {
            res.render("adminschedule",{bus:allBus});
        }
    })
});

router.get('/schedule/create',middleware.isloggedIn, function(req, res){
    res.render('admincreateschedule');
});

router.post('/schedule/create',middleware.isloggedIn, function(req, res){
    let n_id = req.body.busnum;
    let n_price= req.body.price;
    let n_city1 = req.body.city1;
    let n_city2 = req.body.city2;
    let n_date = req.body.date;
    let n_depart = req.body.depart;
    let n_arrive = req.body.arrive;
    let n_atime = req.body.atime;    

    let n_bus = {
        busnum: n_id,
        city1 : n_city1,
        city2: n_city2,
        depart: n_depart,
        arrive: n_arrive,
        atime : n_atime,
        price : n_price,
        date : n_date,
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
    };
    console.log(n_bus);
    Bus.create(n_bus, function(error,ticket){
        if(error){
            console.log(error); 
        } else {
            console.log("New bus added.");
            res.redirect('/admin/schedule')
        }
    });
});


router.get('/schedule/:id',middleware.isloggedIn, function(req, res){
    res.render('admineditschedule');
});

router.post("/schedule/:id", middleware.isloggedIn, function(req,res){
    let iid = req.body.id
    let n_id = req.body.busnum;
    let n_price= req.body.price;
    let n_city1 = req.body.city1;
    let n_city2 = req.body.city2;
    let n_date = req.body.date;
    let n_depart = req.body.depart;
    let n_arrive = req.body.arrive;
    let n_atime = req.body.atime;    

    let n_bus = {
        busnum: n_id,
        city1 : n_city1,
        city2: n_city2,
        depart: n_depart,
        arrive: n_arrive,
        atime : n_atime,
        price : n_price,
        date : n_date,
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
    };
    Bus.findByIdAndUpdate(req.params.id, n_bus, function(err, updatedTarot){
        if(err){
            console.log(err)
            res.redirect('/admin/schedule');
        } else {
            res.redirect('/admin/schedule');
        }
    });
});




router.get('/traveladvice',middleware.isloggedIn, function(req, res){
    res.render('adminta');
});

router.get('/traveladvice/create',middleware.isloggedIn, function(req, res){
    res.render('admintacreate');
});

router.get('/traveladvice/edit',middleware.isloggedIn, function(req, res){
    res.render('admintaedit');
});

router.get('/promotion',middleware.isloggedIn, function(req, res){
    res.render('adminpro');
});


module.exports = router;