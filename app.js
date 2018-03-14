var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res){
    res.send('Ritsu Yan');
});

app.get('/about', function (req, res) {
    res.send('the node course');
});

app.get('/user', function (req, res) {
    res.send({
        'id':'1',
        'name': 'lijin'
    });
});

app.use(function (req, res, next) {
    res.status(404);
    res.send('404 -- not found');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});