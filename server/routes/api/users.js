const express = require('express');
const bcyrpt = require('bcrypt');
const config = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const { User, validate } = require('../../models/user');

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
    if (user) return res.status(400).send('User already registered');

    // create new object by the req body data
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password 
    });

    // hashed the input password
    const salt = await bcyrpt.genSalt(10);
    user.password = await bcyrpt.hash(user.password, salt);

    // save the data wrap it into the catch block
    try {
        user = await user.save();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }

    // create token with json web token based on user _id on the database
    // NOTE : ENVIRONMENT VARIABLE FOR "jwtPrivateKey" IS NOT WORKING YET
    const token = jwt.sign( { _id: user._id }, config.get('jwtPrivateKey'));

    // send respon body and header to the client
    // NOTE : THE HEADER IMPLEMENTATION IS NOT WORKING YET
    res.header('x-auth-token', token).send(user);
});

module.exports = router;