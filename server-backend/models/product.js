const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  isSale: Boolean,
  isBestSeller: Boolean,
});

module.exports = mongoose.model("Product", productSchema);
