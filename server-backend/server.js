const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const routes = require("./routes/products");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());
app.use("/api/products", routes);

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "Backend running" });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
