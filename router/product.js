const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
  deleteProduct,
} = require("../controller/productController");

router.route("/").post(createProduct).get(getAllProduct).delete(deleteProduct);
module.exports = router;