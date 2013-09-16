/*jshint loopfunc: true */

var mongoose = require('mongoose'),
    db       = 'mongodb://localhost:27017/node-test';

exports.connect = function (done) {
    'use strict';

    mongoose.connect(db, done);
};

exports.disconnect = function (done) {
    'use strict';

    return mongoose.disconnect(done);
};

exports.cleardb = function (done) {
    'use strict';

    var collections = mongoose.connection.collections,
        key;

    for (key in collections) {
        collections[key].remove(function () {});
    }

    return done();
};
