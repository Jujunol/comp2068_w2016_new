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
    // res.sendfile(path.join(__dirname, "public", "index.html"));
});
app.get('/info', function (req, res) {
    res.sendFile(path.join(__dirname, "public", "info.html"));
});
app.listen(port, function () {
    console.log('App server started on port: ' + port);
});
// import http = require("http");
// var port:number = process.env.PORT || 8080;
// var server = http.createServer(function(req:http.ServerRequest, res:http.ServerResponse) {
//     res.writeHead(200, {"Content-type" : "text/html"})
//     res.end("<h1>Hello World!</h1>");
// }).listen(port);  
