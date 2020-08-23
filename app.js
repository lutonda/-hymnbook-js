var express = require('express'),
    config = require('./config/database'),
    mongoose = require('mongoose'),
    middleware = require('./config/middleware'),
    express = require('express');

//sect the mongoo connection string from config
mongoose.connect(config.development, (err) => {
    let t = err;
});
var db = mongoose.connection;

// routes
var apiRoute = require('./routes/api.route'),
    typePartRoute = require('./routes/typePart.route');


// Init App
var app = express();
var server = require("http").Server(app);

app.set('port', (process.env.PORT || 8800));
server.listen(app.get('port'), function() {
    console.log('Listinig to port ' + app.get('port'));
});

app.use('/api/v1/', middleware.checkToken, apiRoute);


app.use('/api/v1/type_part', middleware.checkToken, typePartRoute)