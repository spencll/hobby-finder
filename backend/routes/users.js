const express = require('express');
const User = require('../models/user'); // Update the path to your User model
const Hobby = require('../models/hobby')

const router = express.Router();

// Create a new user.
router.post('/add', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save()
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});


// User registration
router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Create hobby
router.post('/addHobby', async (req, res) => {
    try {
        const hobby = new Hobby(req.body);
        await hobby.save()
        res.status(201).send(hobby);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Find specific hobby
router.post('/getHobby', async (req, res) => {
    const {name} = req.body
    try {
        const hobby = await Hobby.findOne({name});
        res.status(201).send(hobby);
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;

    