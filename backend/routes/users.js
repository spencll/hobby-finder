const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/users'); // Update the path to your User model

const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});


    