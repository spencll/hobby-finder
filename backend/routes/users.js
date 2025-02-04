const express = require('express');
const User = require('../models/user'); // Update the path to your User model

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

// User login
router.post('/login', async (req, res) => {
    try {
        // Implement your login logic here
        // For example, verify credentials, generate token, etc.
        res.status(200).send({ message: 'Login successful' });
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;

    