const express = require('express')
const {
	getGamesList,
	getMatchListByGameId,
	getMatchById,
} = require('../controllers/gamesController')

const router = express.Router()

router.get('/Games_List', getGamesList)
router.get('/match/:game_id', getMatchListByGameId)
router.get('/match/Match/:id', getMatchById)

module.exports = router
