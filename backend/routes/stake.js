const express = require('express')
const { getStakeList, createStake } = require('../controllers/stakeController')

const router = express.Router()

router.get('/', getStakeList)
router.post('/', createStake)

module.exports = router
