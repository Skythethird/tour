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

app.get('/', function(req, res){
    res.render('index');
});

app.get('/login', function(req, res){
    res.render('login');
});

app.post('/login', passport.authenticate('local',{
    successRedirect: '/hidden',
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
    res.redirect('/');
});

app.get('/signup', function(req, res){
    res.render('signup');
});

app.post('/signup', function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('signup');
        }
        passport.authenticate('local')(req,res,function(){
            res.redirect('/hidden');
        });
    });
});

app.get('/logout',isloggedIn ,function(req, res){
    req.logout();
    res.redirect('/');
});

app.get('/hidden',isloggedIn ,function(req, res){
    res.render('hidden');
});

app.listen(3000, function(req,res){
    console.log("Server is Started");
});

