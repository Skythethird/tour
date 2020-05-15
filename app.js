const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-Parser'),
      passport = require('passport'),
      passportlocal = require('passport-local')
      passportlocalMongoose = require('passport-local-mongoose') ,
      User = require('./models/user')
      path = require('path') 
    ;

mongoose.connect('mongodb://localhost/auth_test');
let app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-session')({
    secret: 'CSS227',
    resave: false,
    saveIninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportlocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/home', function(req, res){
    res.render('search');
});

app.get('/promotion', function(req, res){
    res.render('pro');
});

app.get('/traveladvice', function(req, res){
    res.render('advice');
});

app.get('/bangkok', function(req, res){
    res.render('ta1');
});

app.get('/ayutthaya', function(req, res){
    res.render('ta2');
});

app.get('/chiangmai', function(req, res){
    res.render('ta3');
});

app.get('/chonburi', function(req, res){
    res.render('ta4');
});

app.get('/krabi', function(req, res){
    res.render('ta5');
});

app.get('/step2', function(req, res){
    res.render('step2');
});

app.get('/step4', function(req, res){
    res.render('step4');
});

app.get('/step5', function(req, res){
    res.render('step5');
});

app.get('/step6', function(req, res){
    res.render('step6');
});

app.get('/login', function(req, res){
    res.render('login');
});
app.get('/signup', function(req, res){
    res.render('signup');
});

app.post('/login', passport.authenticate('local',{
    successRedirect: '/home',
    failureRedirect: 'login'
}),function(req, res){
});

function isloggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

app.get('/logout', function(req, res){
    res.redirect('/home');
});

app.post('/signup', function(req, res){
    User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('login');
        }
        passport.authenticate('local')(req,res,function(){
            res.redirect('/hidden');
        });
    });
});

app.get('/logout',isloggedIn ,function(req, res){
    req.logout();
    res.redirect('/home');
});

app.get('/hidden',isloggedIn ,function(req, res){
    res.render('search');
});


app.listen(3000, function(req,res){
    console.log("Server is Started");
});

