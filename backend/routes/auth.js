// auth.js (Authentication Routes)
const express = require('express');
const User = require('../models/user'); // Update the path to your User model
const router = express.Router();
const jwt = require('jsonwebtoken');

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
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        // Compare passwords
        const isMatch = await user.comparePassword(password);
    
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, 'your-secret-key', { expiresIn: '1h' });

        // Send response with token
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
    })


// Middleware to protect routes (example)
const authMiddleware = (req, res, next) => {
    // Implement your authentication check logic here
    next();
};

// Create a new user
router.post('/add', authMiddleware, async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Other user routes (protected by authMiddleware)
router.get('/profile', authMiddleware, async (req, res) => {
    // Fetch user profile logic here
    res.status(200).send({ message: 'User profile' });
});

module.exports = router;
