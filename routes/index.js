const express = require('express'),
      router = express.Router();
      passport = require('passport'),
      User = require('../models/user');



router.get('/', function(req, res){
    res.render('search');
});

router.get('/login', function(req, res){
    res.render('login');
});
router.get('/signup', function(req, res){
    res.render('signup');
});

router.post('/login', passport.authenticate('local',{
    successRedirect: '/step4',
    failureRedirect: 'login'
}),function(req, res){
});

router.post('/signup', function(req, res){
    User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('login');
        }
        passport.authenticate('local')(req,res,function(){
            res.redirect('/');
        });
    });
});

router.get('/logout',function(req, res){
    req.logout();
    req.flash('success','You Logout');
    res.redirect('/');
});


module.exports = router;