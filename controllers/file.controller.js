const Readable = require('stream').Readable

const google = require('./../services/google.drive.service');

exports.index = function (req, res, next) {
    res.render("api", { title: "Hey", message: "Hello there!" });
};

exports.getOne = async function (req, res) {
    google.download(req.params.id, (err,y) => {
        y.headers['content-disposition']='inline';
        res.writeHead(y.status, y.headers);
        y.data.pipe(res)       
    })
};