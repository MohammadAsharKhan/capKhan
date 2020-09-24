const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productID: { type: String, unique: true },
    productname: String,
    productDescription: String,
    productprice: Number,
})
const Product = mongoose.model('Product', productSchema);

module.exports = Product;