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
const { google } = require('googleapis');
const fs = require('fs');

const TOKEN_PATH = './config/token.json';
//sect the mongoo connection string from config
mongoose.connect(config.development, (err) => {
    let t = err;
});

var db = mongoose.connection;

// Init App
var app = express();
var server = require("http").Server(app);

app.use(cors())
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.get('/google/calback', (req, res) => {
    const code = req.locaquery.code;
    const credencials = require('./config/credentials.json');

    const { client_secret, client_id, redirect_uris } = credencials.web;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.log('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        try {
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
        } catch (e) {
            let i=e;
        }

    });
})
app.use(bodyParser.json());

app.use('/api/v1/', middleware.checkToken, apiRoute);

app.use('/api/v1/type_parts', middleware.checkToken, typePartRoute)

app.use('/api/v1/authors', middleware.checkToken, authorRoute);

app.use('/api/v1/hymns', middleware.checkToken, hymnRoute);

app.use('/api/v1/languages', middleware.checkToken, languageRoute);

app.use('/api/v1/parts', middleware.checkToken, partRoute);

app.use('/api/v1/users', middleware.checkToken, userRoute);



app.set('port', (process.env.PORT || 8800));
server.listen(app.get('port'), function () {
    console.log('Listinig to port ' + app.get('port'));
});
