const Product = require('../models/Product');
const User = require('../models/User');

exports.viewShoppingcart = (req, res) => {
  Product.find({},(err, products) => {
    if (err) throw err;
    console.log();
  res.render('shoppingcart')
  });

};

exports.addItem = (req, res) => {
if (err) throw err;
console.log(products);
res.render('shoppingcart/addItem', {})
};

exports.removeItem = (req, res) => {
if (err) throw err;
console.log(products);
res.render('shoppingcart/removeItem', {})
};

exports.updateCart = (req, res) => {
if (err) throw err;
console.log(products);
res.render('shoppingcart/updateCart', {})
};