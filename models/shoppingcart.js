const mongoose = require('mongoose');
const shoppingCartSchema = new mongoose.Schema({
    orderId: Number,
    customerID: Number,
    customerName: String,
    products: [
        {
            productID: Number,
            productName: String,
            productDescription: String,
            prouctBrand: String,
            productPrice: Number,
            quantity: Number
        }
    ],
    itemQuantity: Number,
    orderTotal: Number,
})
const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);
module.exports = ShoppingCart;