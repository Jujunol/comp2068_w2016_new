/// <reference path="typings/_reference.d.ts" />

import express = require('express');

var app:express.Express = express();
var port:number = process.env.port || 8080;

app.get('/', function(req:express.Request, res:express.Response, next:any) {
    res.send('Hello world!<br> - A message from express');
});

app.get('/info', function(req:express.Request, res:express.Response) {
    res.send('Your custom info page goes here');
});

app.listen(port, function() {
    console.log('App server started on port: ' + port);
});

// import http = require("http");

// var port:number = process.env.PORT || 8080;

// var server = http.createServer(function(req:http.ServerRequest, res:http.ServerResponse) {
//     res.writeHead(200, {"Content-type" : "text/html"})
//     res.end("<h1>Hello World!</h1>");
// }).listen(port); 
