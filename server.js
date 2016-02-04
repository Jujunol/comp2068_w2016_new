/// <reference path="typings/_reference.d.ts" />
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 8080;
app.set('views', './views');
app.set('view engine', 'jade');
app.use('/scripts/lib/', express.static(__dirname + '/scripts/lib'));
app.get('/', function (req, res) {
    res.render('index');
}).get('/info', function (req, res) {
    res.sendfile(path.join(__dirname, "public", "info.html"));
});
app.listen(port, function () {
    console.log('App server started on port: ' + port);
});
