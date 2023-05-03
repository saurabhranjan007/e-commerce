const express = require('express')
const router = express.Router()
const flashProductController = require('../controllers/flash-product-controller')
const { validateToken } = require('../utils/authentication')

router.post("/create", validateToken, flashProductController.createProduct)
router.post("/delete", validateToken, flashProductController.deleteProduct)
router.get("/all", validateToken, flashProductController.getAllProducts)

module.exports = router; 