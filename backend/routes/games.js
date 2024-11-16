const express = require('express')
const { getGamesList, GET_LIST } = require('../controllers/gamesController')

const router = express.Router()

router.get('/Games_List', getGamesList)

// For react-admin
router.get('/', GET_LIST)

module.exports = router
