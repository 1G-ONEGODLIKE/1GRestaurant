const express = require("express");
const session = require("express-session");
const router = express.Router();
const Cart = require('../models/cart')

router.get('/add/:id', function(req, res, next){
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.addByOne(productId);
    req.session.cart = cart;
    res.redirect('/cart')
})

router.get("/cart", function(req, res, next) {
    if (!req.session.cart){
        return res.render('cart', {products: null});
    }
    var cart = new Cart(req.session.cart);
    res.render('cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

module.exports = router;