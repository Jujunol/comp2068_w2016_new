/// <reference path="typings/_reference.d.ts" />

import express = require('express');
import path = require('path');

var app:express.Express = express();
var port:number = process.env.port || 8080;

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/scripts/lib/', express.static(__dirname + '/scripts/lib'));

app.get('/', function(req:express.Request, res:express.Response) {
    res.render('index');
});

app.get('/info', function(req:express.Request, res:express.Response) {
    res.sendfile(path.join(__dirname, "public", "info.html"));
});

app.listen(port, function() {
    console.log('App server started on port: ' + port);
});
