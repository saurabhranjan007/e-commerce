const express = require('express')
const router = express.Router()
const newProductController = require("../controllers/new-product-controller")

router.post("/create", newProductController.createProduct)
router.post("/delete", newProductController.deleteProduct)
router.get("/all", newProductController.getAllProducts)

module.exports = router; 