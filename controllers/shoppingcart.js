const Product = require("../models/Product");
const User = require("../models/User");

exports.viewShoppingcart = (req, res) => {
  Product.find({},(err, products) => {
    if (err) throw err;
    console.log();
  res.render('shoppingCart')
  });
};
 exports.addItem = (req, res) => {
      console.log(products);
    res.render('shoppingCart/addItem', {})
};
exports.removeItem = (req, res) => {
      console.log(products);
    res.render('shoppingCart/removeItem', {})
};
exports.updateCart = (req, res) => {
      console.log(products);
    res.render('shoppingCart/updateCart', {})
}; 