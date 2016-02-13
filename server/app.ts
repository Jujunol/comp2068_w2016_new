/// <reference path="../typings/tsd.d.ts" />

class ServerError extends Error {
    
    public status:number;
    
    constructor(err?:string) {
        super(err);
    }
    
}

import express = require('express');

// var routes = require('./routes/index.js');

var app:express.Express = express();
var port:number = process.env.port || 8080;

app.set('views', './server/views');
app.set('view engine', 'jade');

app.use('/lib', express.static('./public/lib'));
app.use('/lib', express.static('./public/scripts'));

app
    .get('/', function(req:express.Request, res:express.Response) {
        res.render('index', { "title": "COMP2068 Class " });
    })
    .get('/lab', function(req:express.Request, res:express.Response) {
         res.render('lab', { "title": "COMP2068 Class " });
    })  
    .get('/projects', navigate)
    .get('/services', navigate)
    .get('/about', navigate)
    .get('/contact', navigate)
;

app.use(function(req, res) {
    res.status(404);
    res.setHeader('Location', '/');
    res.end();
});

app.listen(port, function() {
    console.log('App server started on port: ' + port);
});

function navigate(req:express.Request, res:express.Response) {
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
}