const express = require('express')
const router = express.Router()
const flashProductController = require('../controllers/flash-product-controller')

router.post("/create", flashProductController.createProduct)
router.post("/delete", flashProductController.deleteProduct)
router.get("/all", flashProductController.getAllProducts)

module.exports = router; 