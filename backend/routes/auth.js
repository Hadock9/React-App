const express = require('express')
const {
	googleLogin,
	login,
	registration,
	updateProfile,
} = require('../controllers/authController')

const router = express.Router()

router.post('/google-login', googleLogin)
router.post('/login', login)
router.post('/registration', registration)
router.put('/updateProfile', updateProfile)

module.exports = router

