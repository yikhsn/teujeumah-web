const express = require('express');
const router = express.Router();

const Joi = require('joi');
const bcyrpt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

const { User } = require('../../models/user');

// all routes
router.get('/', async(req, res) => {
    const user = await User.find();
    res.send(user);
});

router.post('/', async(req, res) => {

    // validate the user data and send res '404' status
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // check if the email user input is not store yet in database
    let user = await User.findOne( { email: req.body.email } );  
    if (!user) return res.status(400).send('Invalid email');


    // cheking if the password user input is same as the password 
    // in the database by the inputed email
    const validPassword = await bcyrpt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    // generate token with json web token and env variable as private key
    // NOTE : ENVIRONMENT VARIABLE FOR "jwtPrivateKey" IS NOT WORKING YET
    const token = jwt.sign( { _id: user._id }, config.get('jwtPrivateKey'));

    // send token to the user as login's response
    res.send(token); 
});


// function to validate the user input request is correct
function validate(req){
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    }

    return Joi.validate(req, schema);
}

module.exports = router;