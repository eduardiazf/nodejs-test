'use strict';

var UserModel = require('../models/user'),
    create;


create = function (user, done) {
    var u = new UserModel(user);
    u.save(done);
};

module.exports = (function () {
    return {
        create: create
    };
}());
