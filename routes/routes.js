const express = require("express");
const routes = express.Router();
const { cartItems } = require('../cart-items');

routes.get("/cart-items", (req, res) => {
    res.json({ cartItems });
});

routes.post("/cart-items", (req, res) => {
    console.log(req.body);
});

routes.put('/cart-items/:id', (req, res) => {
    console.log(req.params.id,req.body);
    // console.log(req.params.id);
});

routes.delete("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
});

module.exports = routes;
