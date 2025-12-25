const mongoose = require("mongoose");
const Product = require("./models/product");
const products = require("./data/products");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Dummy data inserted");
    process.exit();
  })
  .catch(err => console.log(err));
