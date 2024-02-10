// backend/routes/order.js

const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to place order' });
    }
});

module.exports = router;
