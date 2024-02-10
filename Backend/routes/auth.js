// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({ username: req.body.username, password: hashedPassword, role: req.body.role });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(401).json({ message: 'Invalid username or password' });

        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, process.env.SECRET_KEY);
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to login' });
    }
});

module.exports = router;
