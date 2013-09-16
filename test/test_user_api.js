var utils = require('./utils'),
    app = require('../app'),
    request = require('supertest');


describe('@Api User', function () {
    'use strict';

    before(function (done) {
        utils.connect(done);
    });

    beforeEach(function () {
        this.user = {
            username: 'eduardiaz',
            password: 'hola',
            email   : 'eduar.diaz37@gmail.com'
        };
    });

    describe('POST /user', function () {

        it('post /user should create user', function (done) {
            request(app)
                .post('/user')
                .send(this.user)
                .expect(201, done);
        });
    });

    after(function (done) {
        utils.cleardb(function () {
            utils.disconnect(done);
        });
    });
});
