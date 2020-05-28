const express = require('express'),
      mongoose = require('mongoose');
      flash = require('connect-flash'),
      bodyParser = require('body-Parser'),
      passport = require('passport'),
      passportlocal = require('passport-local'),
      passportlocalMongoose = require('passport-local-mongoose') ,
      middleware = require('./middleware'),
      User = require('./models/user'),
      path = require('path'),
      indexRoutes = require('./routes/index'),

    

mongoose.connect('mongodb://localhost/auth_test',{useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
let app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

app.use(require('express-session')({
    secret: 'CSS227',
    resave: false,
    saveIninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});

passport.use(new passportlocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


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

app.get('/profile',middleware.isloggedIn,function(req, res){
    res.render('profile');
});

app.get('/profile/edit',middleware.isloggedIn ,function(req, res){
    res.render('edit');
});

app.post("/profile/edit",middleware.isloggedIn, function(req,res){
    let id = req.body.id;
    User.update({_id:id},{$set:{username : req.body.username,email : req.body.email}}, function(err,profile){
    if(err){
        console.log("error");
    } else {
        console.log("edit");
        req.flash('success','You changed successfully please login again');
        res.redirect("/login");
    }
    });
});


app.get('/profile/history',middleware.isloggedIn ,function(req, res){
    res.render('history');
});

app.use('/',indexRoutes);


app.listen(3000, function(req,res){
    console.log("Server is Started");
});
