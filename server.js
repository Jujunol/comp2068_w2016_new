/// <reference path="typings/_reference.d.ts" />
var express = require('express');
// import path = require('path');
var app = express();
var port = process.env.port || 8080;
app.set('views', './views');
app.set('view engine', 'jade');
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/lib', express.static(__dirname + '/scripts'));
app.get('/', function (req, res) {
    res.render('index', { "title": "COMP2068 Class " });
});
app.listen(port, function () {
    console.log('App server started on port: ' + port);
});
