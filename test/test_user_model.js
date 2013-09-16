var expect = require('chai').expect,
    utils = require('./utils'),
    ValidationError = require('mongoose').Error.ValidationError,
    UserModel = require('../app/models/user');


describe('@UserModel', function () {
    'use strict';

    before(function (done) {
        utils.connect(done);
    });

    beforeEach(function () {
        this.user = new UserModel({
            username: 'eduardiaz',
            password: 'hola',
            email: 'eduar.diaz37@gmail.com'
        });
    });

    describe('#Instance', function () {

        it('user should instance UserModel', function () {
            expect(this.user).to.be.instanceOf(UserModel);
        });

        it('user should attributes', function () {
            expect(this.user.get('username')).to.be.equal('eduardiaz');
            expect(this.user.get('email')).to.be.equal('eduar.diaz37@gmail.com');
        });

    });

    describe('#Save', function () {

        it('save user', function (done) {
            this.user.save(done);
        });

        it('save should fail, if email is not valid', function (done) {
            this.user.email = 'eduar.diaz37gmail.com';
            this.user.save(function (err) {
                expect(err).to.be.instanceOf(ValidationError);
                done();
            });
        });

        it('user should attributes, token', function (done) {
            this.user.save(function (err, doc) {
                expect(doc.get('token')).to.be.a('string');
                done(err);
            });
        });
    });

    after(function (done) {
        utils.cleardb(function () {
            utils.disconnect(done);
        });
    });
});
