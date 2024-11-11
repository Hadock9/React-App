const express = require('express')
const {
	updateProfile,
	updateBonusMoney,
	GetMoney,
	GET_LIST,
} = require('../controllers/userController')

const router = express.Router()

router.put('/updateProfile', updateProfile)
router.put('/updateBonusMoney', updateBonusMoney)
router.get('/:id/getMoney', GetMoney)

// For react-admin
router.get('/', GET_LIST)

module.exports = router
