
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = './../config/token.json';
const credencials = require('./../config/credentials.json');

const token = require('./../config/token.json');
const { client_secret, client_id, redirect_uris } = credencials.web;
const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

exports.index = function (req, res, next) {
    res.render("api", { title: "Hey", message: "Hello there!" });
};

exports.gerUrl = async (x, y) => {

}

exports.listFiles = async (req, res) => {
    init((auth) => {
        const drive = google.drive({ version: 'v3', auth });
        drive.files.list({
            pageSize: 10,
            fields: 'nextPageToken, files(id, name)',
        }, (err, res) => {
            if (err) return console.log('The API returned an error: ' + err);
            const files = res.data.files;
            if (files.length) {
                console.log('Files:');
                files.map((file) => {
                    console.log(`${file.name} (${file.id})`);
                });
            } else {
                console.log('No files found.');
            }
        });
    })
}
exports.download = (id, callback) => {
    init(auth => {
        const drive = google.drive({ version: 'v3', auth });
        drive.files.get(
            {
                fileId: id,
                alt: 'media'
            },
            { responseType: 'stream' },
            callback
        )
    })
}
exports.upload = async function (data, callback) {
    init(auth => {
        const drive = google.drive({ version: 'v3', auth });
        var fileMetadata = {
            'name': data.name,
            parents: ['1lrjPFFjcLObbSh9LHqYZStf9QwNErSQa']
        };
        var media = {
            mimeType: data.type,
            body: data.data
        };
        drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
        }, callback);

    })
};

exports.list = async function (callback) {
    init(auth => {
        const drive = google.drive({ version: 'v3', auth });
        drive.files.list({
            pageSize: 10,
            fields: 'nextPageToken, files(id, name)',
        }, (err, res) => {
            if (err) return console.log('The API returned an error: ' + err);
            const files = res.data.files;
            if (files.length) {
                console.log('Files:');
                files.map((file) => {
                    console.log(`${file.name} - (${file.id})`);
                });
            } else {
                console.log('No files found.');
            }
            callback(files)
        });

    })
};

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
let init = async (callback) => {
    if (token.access_token === undefined) return getAccessToken(oAuth2Client, callback);
    //oAuth2Client.setCredentials(JSON.parse(_token));
    oAuth2Client.setCredentials(token);

    callback(oAuth2Client);
}


/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listFiles(auth) {

}