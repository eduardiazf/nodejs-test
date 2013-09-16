var UserController = require('../app/controller/user'),
    utils = require('./utils');


describe('@Controller user', function () {
    'use strict';

    before(function (done) {
        utils.connect(done);
    });

    beforeEach(function () {
        this.user = {
            username: 'eduardiaz',
            password: 'hola',
            email: 'eduar.diaz37@gmail.com'
        };
    });

    describe('Create user', function () {

        it('should create new user', function (done) {
            UserController.create(this.user, done);
        });
    });

    after(function (done) {
        utils.cleardb(function () {
            utils.disconnect(done);
        });
    });
});
