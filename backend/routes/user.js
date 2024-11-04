const express = require('express')
const {
	updateProfile,
	updateBonusMoney,
} = require('../controllers/userController')

const router = express.Router()

router.put('/updateProfile', updateProfile)
router.put('/updateBonusMoney', updateBonusMoney)

module.exports = router
