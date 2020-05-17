module.exports = {
    isloggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', 'you need to login')
    res.redirect('/login');
    }
}