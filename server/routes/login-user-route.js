const express = require('express')
const router = express.Router()
const loginController = require("../controllers/login-user-controller")
const { validateToken } = require('../utils/authentication')

router.post("/signup", validateToken, loginController.createUser)
router.post("/signin", validateToken, loginController.signinUser)
router.get("/signout", validateToken, loginController.logout)

module.exports = router; 