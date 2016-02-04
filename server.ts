/// <reference path="typings/_reference.d.ts" />

import express = require('express');
// import path = require('path');

var app:express.Express = express();
var port:number = process.env.port || 8080;

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/lib', express.static(__dirname + '/lib'));
app.use('/lib', express.static(__dirname + '/scripts'));

app.get('/', function(req:express.Request, res:express.Response) {
    res.render('index', { "title": "COMP2068 Class " });
});

app.listen(port, function() {
    console.log('App server started on port: ' + port);
});
