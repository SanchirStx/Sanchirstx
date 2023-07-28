const express = require("express");
require("dotenv").config();
const connetDB = require("./data");
const categoryRouter = require("./router/category.js");
const productRouter = require("./router/product.js");
const userRouter = require("./router/user.js");
const app = express();
connetDB();
app.use(express.json());
app.use("/api/v2/category", categoryRouter);
app.use("/api/v2/product", productRouter);
app.use("/api/v2/user", userRouter);
app.listen(process.env.port, () => {
  console.log(`server listen ${process.env.port}`);
});