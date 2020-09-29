const mongoose = require('mongoose');

const shoppingcartSchema = new mongoose.Schema({
    orderID: Number,
    productID: { type: String, unique: true},
    name: String,
    brand: Number,
    price: Number,
    description: String,
})
const shoppingcart = mongoose.model('shoppingcart', shoppingcartSchema);

module.exports = shoppingcart;