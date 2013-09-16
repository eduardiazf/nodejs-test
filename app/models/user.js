var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    UserSchema;


UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    email   : { type: String }
});

module.exports = mongoose.model('user', UserSchema);
