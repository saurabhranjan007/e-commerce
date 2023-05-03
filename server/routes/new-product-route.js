const express = require('express')
const router = express.Router()
const newProductController = require("../controllers/new-product-controller")
const { validateToken } = require('../utils/authentication')

router.post("/create", validateToken, newProductController.createProduct)
router.post("/delete", validateToken, newProductController.deleteProduct)
router.get("/all", validateToken, newProductController.getAllProducts)

module.exports = router; 