'use strict';

var express = require('express'),
    app = module.exports = exports = express(),
    authorize = require('./middleware/authorize'),
    UserController = require('./controller/user');


app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
});

app.post('/user', function (req, res) {
    var user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    };

    UserController.create(user, function (err) {
        if (err) { return res.status(500).send({ errors: err }); }
        return res.status(201).send({ errors: null });
    });
});

app.get('/user', authorize, function (req, res) {
    res.status(200).send({ errors: null });
});

