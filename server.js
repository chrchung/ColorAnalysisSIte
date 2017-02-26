var express = require('express');
var app = express();
var path = require('path');
var _ = require('lodash');
var bodyParser = require('body-parser')
var session = require('express-session');
var async = require('async');
var fs = require('fs');

app.use(session({secret: 'ssshhhhh', resave: false, saveUninitialized: true}));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!')
});


app.get('/json/:id', function(req, res) {

    var f = fs.readFileSync('assets/' + req.params.id);
    var jsonContent = JSON.parse(f);

    res.json(jsonContent);
});

app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname+'/index.html'));
});


app.route('/*')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname+ '/index.html'));
    });
