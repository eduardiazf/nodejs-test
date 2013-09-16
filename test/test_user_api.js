var utils = require('./utils'),
    app = require('../app'),
    request = require('supertest'),
    UserModel = require('../app/models/user');


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

    describe('GET /user', function () {
        it('should return 403 if token invalid', function (done) {
            request(app)
                .get('/user')
                .set('Authorization', 'Token xxxxxxxxxxxxxxxx')
                .expect(403, done);
        });

        it('should return 200 and user, if token valid', function (done) {
            var user = new UserModel({
                username: 'test',
                password:  'test',
                email: 'test@test.com'
            });

            user.save(function (err, doc) {
                var token = 'Token ' + doc.token;

                request(app)
                    .get('/user')
                    .set('Authorization', token)
                    .expect(200, done);
            });
        });
    });

    after(function (done) {
        utils.cleardb(function () {
            utils.disconnect(done);
        });
    });
});
