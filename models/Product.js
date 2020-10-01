const mongoose = require('mongoose');
 
const productSchema = new mongoose.Schema({
    productID: { type: String, unique: true },
    productName: String,
    productDescription: String,
    productBrand: String,
    productPrice: Number
})
const Product = mongoose.model('Product', productSchema);
 
module.exports = Product;