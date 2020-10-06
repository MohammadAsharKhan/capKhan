const Product = require("../models/Product");
const User = require("../models/User");
const Cart = require("../models/Cart");

exports.viewShoppingcart = (req, res) => {
  Cart.find({},(err, carts) => {
    if (err) throw err;
    console.log(carts);
  res.render('shoppingCart', {cart: carts})
  });
};
 //exports.addItem = (req, res) => {
      //console.log(products);
    //res.render('shoppingCart/addItem', {})
//};
//exports.removeItem = (req, res) => {
      //console.log(products);
    //res.render('shoppingCart/removeItem', {})
//};
//exports.updateCart = (req, res) => {
      //console.log(products);
    //res.render('shoppingCart/updateCart', {})
//}: