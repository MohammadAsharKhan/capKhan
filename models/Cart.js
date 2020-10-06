const mongoose = require('mongoose');
const shoppingCartSchema = new mongoose.Schema({
    orderID: Number,
    customerID: Number,
    customerName: String,
    products: [
        {
            productID: String,
            productName: String,
            productDescription: String,
            productBrand: String,
            productPrice: Number,
            quantity: Number
        }
    ],
    itemQuantity: Number,
    orderTotal: Number,
})
const Cart = mongoose.model('Cart', shoppingCartSchema);
module.exports = Cart;