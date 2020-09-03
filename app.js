var express = require('express'),
    config = require('./config/database'),
    mongoose = require('mongoose'),
    middleware = require('./config/middleware'),
    express = require('express'),

    cors = require('cors')
    bodyParser = require('body-parser');
// routes
var apiRoute = require('./routes/api.route'),
    typePartRoute = require('./routes/typePart.route'),
    authorRoute = require('./routes/author.route'),
    hymnRoute = require('./routes/hymn.route'),
    languageRoute = require('./routes/language.route'),
    partRoute = require('./routes/part.route');

//sect the mongoo connection string from config
mongoose.connect(config.development, (err) => {
    let t = err;
});
var db = mongoose.connection;


// Init App
var app = express();
var server = require("http").Server(app);

app.use(cors())

app.use(bodyParser.json());

app.use('/api/v1/', middleware.checkToken, apiRoute);

app.use('/api/v1/type_parts', middleware.checkToken, typePartRoute)

app.use('/api/v1/authors', middleware.checkToken, authorRoute);

app.use('/api/v1/hymns', middleware.checkToken, hymnRoute);

app.use('/api/v1/languages', middleware.checkToken, languageRoute);

app.use('/api/v1/parts', middleware.checkToken, partRoute);



app.set('port', (process.env.PORT || 8800));
server.listen(app.get('port'), function() {
    console.log('Listinig to port ' + app.get('port'));
});
