const express = require('express')
const {
	getStakeList,
	createStake,
	GET_LIST,
	Delete_stake,
} = require('../controllers/stakeController')

const router = express.Router()

router.get('/:id', getStakeList)
router.post('/', createStake)

// For react-admin
router.get('/', GET_LIST)
router.delete('/:id', Delete_stake)
module.exports = router
