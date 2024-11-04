const express = require('express')
const {
	getGamesList,
	getMatchListByGameId,
	getMatchListPagination,
	getMatchById,
	getMatchList,
} = require('../controllers/gamesController')

const router = express.Router()

router.get('/Games_List', getGamesList)

router.get('/matches', getMatchListPagination)
router.get('/matches/game_id=:game_id', getMatchListByGameId)
router.get('/matches/Match/:id', getMatchById)

module.exports = router
