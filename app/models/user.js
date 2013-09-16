'use strict';

var mongoose = require('mongoose'),
    validate = require('mongoose-validate'),
    uuid     = require('node-uuid'),
    Schema   = mongoose.Schema,
    UserSchema;


UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    email   : {
        type: String,
        required: true,
        validate: [validate.email, 'invalid email address']
    },
    token  : { type: String }
});

UserSchema.pre('save', function (next) {
    this.token = uuid.v1();
    next();
});

module.exports = mongoose.model('user', UserSchema);
