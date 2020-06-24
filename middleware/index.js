
let middlewareObj = {};

middlewareObj.admin = function(req, res, next){
    if(req.user.type === 'admin'){
        return next();
    }
    req.flash('error', 'you need to login as admin')
    res.redirect('/login');
}



middlewareObj.isloggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.session.oldUrl = req.url;
    req.flash('error', 'you need to login')
    res.redirect('/login');
}

module.exports = middlewareObj;