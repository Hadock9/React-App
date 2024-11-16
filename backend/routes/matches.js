const express = require('express')
const {
	getMatchListByGameId,
	getMatchListPagination,
	getMatchById,
	GET_LIST,
} = require('../controllers/matchesController')

const router = express.Router()

router.get('/matches', getMatchListPagination)
router.get('/matches/game_id=:game_id', getMatchListByGameId)
router.get('/matches/Match/:id', getMatchById)

// For react-admin
router.get('/', GET_LIST)

module.exports = router
