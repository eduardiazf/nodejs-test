var UserController = require('../controller/user'),
    _ = require('lodash');

module.exports = function (req, res, next) {
    'use strict';

    var authorization, token;

    authorization = req.get('authorization');
    if (!authorization) {
        return res.status(400).send({ errors: 'request malformed' });
    }

    token = authorization.split(' ')[1];

    UserController.findByToken(token, function (err, doc) {
        if (err) { return res.status(500).send({ errors: err }); }
        if ( _.isNull(doc) ) { return res.status(403).send({ errors: err }); }

        req.user = {
            username: doc.username,
            email: doc.email
        };

        next();
    });
};
