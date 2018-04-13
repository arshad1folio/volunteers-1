const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const router = new express.Router();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(bodyParser.json());
app.use('/', express.static('public'));
app.set('view cache', false);
app.set('views', path.resolve('./view'));
app.set('view engine', 'ejs');

router.get('/', root);
app.use(require('./api/appRoutes'));
function validation(req, res, next){

    next();
}

function root(req, res, next){
    res.render('index', {vartemplate: 'content'});
}

//Server Start

var port = process.env.PORT || 3000;
var mode = process.env.NODE_ENV;
var httpServer = http.createServer(app);
httpServer.listen(port);


// var privateKey = fs.readFileSync('cert.key', 'utf8');
// var certificate = fs.readFileSync('cert.crt', 'utf8');


// var credentials = {key: privateKey, cert: certificate, passphrase: 'Click12345'};

// https.createServer(credentials, app);