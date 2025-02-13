const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50, 
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255, 
    },
    isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function() {
    // NOTE : ENVIRONMENT VARIABLE FOR "jwtPrivateKey" IS NOT WORKING YET
    const token = jwt.sign( { _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(word){
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    }

    return Joi.validate(word, schema);
}

module.exports.User = User;
module.exports.validate = validateUser;