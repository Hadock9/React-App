const express = require('express')
const {
	googleLogin,
	login,
	registration,
} = require('../controllers/authController')

const router = express.Router()

router.post('/google-login', googleLogin)
router.post('/login', login)
router.post('/registration', registration)

module.exports = router
