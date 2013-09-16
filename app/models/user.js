var mongoose = require('mongoose'),
    validate = require('mongoose-validate'),
    Schema   = mongoose.Schema,
    UserSchema;


UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    email   : {
        type: String,
        required: true,
        validate: [validate.email, 'invalid email address']
    }
});

module.exports = mongoose.model('user', UserSchema);
