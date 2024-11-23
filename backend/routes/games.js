const express = require('express')
const {
	getGamesList,
	GET_LIST,
	Delete_game,
} = require('../controllers/gamesController')

const router = express.Router()

router.get('/Games_List', getGamesList)

// For react-admin
router.get('/', GET_LIST)
router.delete('/:id', Delete_game)

module.exports = router
