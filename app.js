var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    expressHandleBars = require('express-handlebars'),
    //expressHandlebarsSections = require('express-handlebars-sections'),
    expressValidador = require('express-validator'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongo = require('mongodb'),
    config = require('./config/database')
mongoose = require('mongoose');


let middleware = require('./config/middleware');

var express = require('express');

//sect the mongoo connection string from config
mongoose.connect(config.development);
var db = mongoose.connection;

// routes
var apiRoute = require('./routes/api.route'),
    authenticationRoute = require('./routes/authentication.route');

// Init App
var app = express();
var server = require("http").Server(app);

app.set('port', (process.env.PORT || 8800));
server.listen(app.get('port'), function() {
    console.log('Listinig to port ' + app.get('port'));
});


// body parse midlleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express session
app.use(session({
    secret: 'secret' /* validate possibility of default RSA */ ,
    saveUninitialized: true,
    resave: true
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// express validator
// : rever validação
app.use(expressValidador({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']'
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        }
    }
}));


// global vars
app.use(function(req, res, next) {
    res.locals.user = req.user || null;
    res.locals.url = req.url.split('/')[1] || 'home'
    res.locals.hostname = req.hostname
    next();
})

app.use('/api', middleware.checkToken, apiRoute);
app.use('/authentication', authenticationRoute);

app.get('/authentication/github',
    passport.authenticate('github'));

/**-- */
app.get('/authentication/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/io');
    });