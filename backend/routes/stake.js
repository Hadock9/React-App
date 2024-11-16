const express = require('express')
const {
	getStakeList,
	createStake,
	GET_LIST,
} = require('../controllers/stakeController')

const router = express.Router()

router.get('/:id', getStakeList)
router.post('/', createStake)

// For react-admin
router.get('/', GET_LIST)

module.exports = router
