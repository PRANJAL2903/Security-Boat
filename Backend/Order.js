
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    quantity: Number
});

module.exports = mongoose.model('Order', orderSchema);
