const express = require("express");
const Product = require("../models/product");
const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET bestsellers
router.get("/bestsellers", async (req, res) => {
  try {
    const bestsellers = await Product.find({ bestseller: true });
    res.json(bestsellers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET sales
router.get("/sales", async (req, res) => {
  try {
    const sales = await Product.find({ onSale: true });
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
