const Product = require('../models/Product');

exports.getAllProducts = (req, res) => {
    Product.find({},(err, products) => {
      if (err) throw err;
      console.log(products);
    res.render('products/products', {products})
    });
};
exports.getRefrigerators = (req, res) => {
    Product.find({productName: 'Refrigerator'},(err, products) => {
      if (err) throw err;
      console.log(products);
    res.render('products/refrigerators', {products})
    });
};
exports.getMicrowaves = (req, res) => {
    Product.find({productName: 'Microwave'},(err, products) => {
      if (err) throw err;
      console.log(products);
    res.render('products/microwaves', {products})
    });
};
exports.getCoffeemakers = (req, res) => {
    Product.find({productName: 'Coffee Maker'},(err, products) => {
      if (err) throw err;
      console.log(products);
    res.render('products/coffeemakers', {products})
    });
};
exports.getBlenders = (req, res) => {
    Product.find({productName: 'Blender'},(err, products) => {
      if (err) throw err;
      console.log(products);
    res.render('products/blenders', {products})
    });
};