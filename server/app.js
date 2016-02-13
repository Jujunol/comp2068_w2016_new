/// <reference path="../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServerError = (function (_super) {
    __extends(ServerError, _super);
    function ServerError(err) {
        _super.call(this, err);
    }
    return ServerError;
})(Error);
var express = require('express');
// var routes = require('./routes/index.js');
var app = express();
var port = process.env.port || 8080;
app.set('views', './server/views');
app.set('view engine', 'jade');
app.use('/lib', express.static('./public/lib'));
app.use('/lib', express.static('./public/scripts'));
app
    .get('/', function (req, res) {
    res.render('index', { "title": "COMP2068 Class " });
})
    .get('/lab', function (req, res) {
    res.render('lab', { "title": "COMP2068 Class " });
})
    .get('/projects', navigate)
    .get('/services', navigate)
    .get('/about', navigate)
    .get('/contact', navigate);
app.use(function (req, res) {
    res.status(404);
    res.setHeader('Location', '/');
    res.end();
});
app.listen(port, function () {
    console.log('App server started on port: ' + port);
});
function navigate(req, res) {
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
}

//# sourceMappingURL=app.js.map
