'use strict';

var UserModel = require('../models/user'),
    create,
    findByToken;


create = function (user, next) {
    var u = new UserModel(user);

    u.save(function (err, doc) {
        next(err, doc);
    });
};

findByToken = function (token, next) {
    UserModel.findOne({ 'token': token }, function (err, user) {
        next(err, user);
    });
};

module.exports = (function () {
    return {
        create: create,
        findByToken: findByToken
    };
}());
