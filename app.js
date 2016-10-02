console.log('before require');

var config = require("nconf");
var express = require('express');
var http = require('http');
var app = express();

console.log('require seccussful');

config.argv()
    .env()
    .file({ file: 'config.json' });

console.log('config seccessfull');

//boot
require('./boot/index')(app);

console.log('boot seccesful');

// routing
require('./routes/index')(app);

console.log('routing seccesful');

http.createServer(app).listen(app.get('port'), function () {
    console.log('listen seccesful');
    if ('development' == app.get('env')) {
        console.log('Express server listening on port ' + app.get('port'));
    }
});
