const express = require('express')
const {
	updateProfile,
	updateBonusMoney,
	GET_LIST,
} = require('../controllers/userController')

const router = express.Router()

router.put('/updateProfile', updateProfile)
router.put('/updateBonusMoney', updateBonusMoney)

// For react-admin
router.get('/', GET_LIST)

module.exports = router
