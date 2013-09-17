var app = require('./app'),
    mongoose = require('mongoose'),
    server = require('http').createServer(app);


mongoose.connect('mongodb://localhost:27017/node-examples');

server.listen(app.get('port'), function () {
    console.log('Server started on port =>', app.get('port'));
});
