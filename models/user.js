const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// user model
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        lowercase: true
    },
    last_name: {
        type: String,
        required: true,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    passwordHash: {
        type: Object
    },
    salt: {
        type: Object
    },
    dt_created: {
        type: Date,
        required: true
    }
});

// set password
UserSchema.method("setPassword", function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
});

// set token
UserSchema.method("generateJWT", function() {
    return jwt.sign({
        id: this._id,
    }, 'SecretKey');
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
