const express = require('express'),
      mongoose = require('mongoose');
const ticket = require('./models/ticket');
const user = require('./models/user');
      flash = require('connect-flash'),
      bodyParser = require('body-Parser'),
      passport = require('passport'),
      passportlocal = require('passport-local'),
      passportlocalMongoose = require('passport-local-mongoose') ,
      middleware = require('./middleware'),
      User = require('./models/user'),
      path = require('path'),
      seedDB = require('./seeds'),
      Bus = require('./models/bus'),
      indexRoutes = require('./routes/index'),
      adminRoutes = require('./routes/admin'),
      busfind = Bus.find({})

    
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb://localhost/auth_test',{useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
let app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
seedDB();

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

app.get('/step4',middleware.isloggedIn, function(req, res){
    res.render('step4');
});

app.get('/step5',middleware.isloggedIn, function(req, res){
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

app.get('/profile/:id/delete',function(req,res){
    User.remove({_id:req.params.id},function(err){
        if(err){
            console.log(err);
        }else{
            req.flash('success','You changed successfully please login again');
            res.redirect('/login');
        }
    })
});


app.get('/profile/history/:id',middleware.isloggedIn ,function(req, res){
    ticket.find({uid:req.params.id},function(error, allTicket){
        if(error){
            console.log("Error!");
        } else {
            res.render("history",{ticket:allTicket});
        }
    })
});


app.get('/profile/password',middleware.isloggedIn,function(req, res){
    res.render('password');
});

app.post('/profile/password',middleware.isloggedIn, function(req,res){
    if(req.body.newpassword == req.body.CNpassword){
        User.findById(req.user.id, function(err,foundUser){
            if(err){
                console.log("ERROR!");
            } else{
                foundUser.changePassword(req.body.oldpassword, req.body.newpassword, function(err){
                    if(err){
                        console.log(err);
                    } else {
                        req.flash('success','You changed successfully please login again');
                        res.redirect("/login");
                    }
                });
            }
        });

    } else{
        req.flash('error',"Password and Confirm password isn't match.");
        res.redirect("/profile/password");
    }
});







app.get('/profile/history/info/:id',middleware.isloggedIn ,function(req, res){
    ticket.findById(req.params.id, function(error, ticid){
        if(error){
            console.log("Error");
        } else {
            res.render("info",{tic:ticid});
        }
    });
});   



app.get('/profile/history/info/:id/delete',middleware.isloggedIn ,function(req, res){
    ticket.remove({_id:req.params.id},function(err){
        if(err){
            console.log(err);
        }else{
            req.flash('success','You trip have been Cancel');
            res.redirect('/profile');
        }
    })
});






app.get("/bus/:id",middleware.isloggedIn, function(req,res){
    Bus.findById(req.params.id, function(error, busid){
        if(error){
            console.log("Error");
        } else {
            res.render("step4",{bus:busid});
        }
    });
});








app.post("/bus/:id",middleware.isloggedIn, function(req,res){
    let n_id = req.body.id;
    let n_bid = req.body.bid;
    let n_fname = req.body.fname; 
    let n_lname = req.body.lname;
    let n_idnum= req.body.idnum;
    let n_price= req.body.Price;
    let n_seat= req.body.Seat;
    let n_city1 = req.body.city1;
    let n_city2 = req.body.city2;
    let n_date = req.body.date;
    let n_de = req.body.depart

    let n_ticket = {
        uid : n_id,
        bnum : n_bid,
        fname : n_fname,
        lname :n_lname,
        ID : n_idnum,
        seat : n_seat,
        price : n_price,
        city1 : n_city1,
        city2 : n_city2,
        date : n_date,
        time : n_de
    };
    console.log(n_ticket);
    ticket.create(n_ticket, function(error,ticket){
        if(error){
            console.log(error); 
        } else {
            console.log("New tik added.");
            res.render("step5",{n_price,n_id,n_seat,n_bid});
        }
    });
});




app.post('/',function(req,res){
    var city1 = req.body.city1;
    var city2 = req.body.city2;
    var date = req.body.date;
    console.log(date);

   if(city1 !='' && city2 !='' && date !=''){
       var cityParam ={$and:[{city1:city1},
        {$and:[{city2:city2},{date:date}]}
       ]
    }
   }else{
     var cityParam={}
   }
   var busfilter = Bus.find(cityParam)
   busfilter.exec(function(err,data){
       if(err)throw err;
       res.render('step2',{Bus:data})
   })

});

app.post("/booking",middleware.isloggedIn, function(req,res){
    var uid = req.body.id;
    var bid = req.body.bid;
    var bnum = req.body.bnum;
    if(uid  !='' && bid !=''){
        var cityParam ={$and:[{uid:uid},
            {$and:[{seat:bid},{bnum:bnum}]}
           ]
        }
    }else{
      var cityParam={}
    }
    var busfilter = ticket.find(cityParam)
    busfilter.exec(function(err,data){
        if(err)throw err;
        res.render('step6',{ticket:data})
    });
});



app.use('/',indexRoutes);
app.use('/admin',adminRoutes);


app.listen(3000, function(req,res){
    console.log("Server is Started");
});
