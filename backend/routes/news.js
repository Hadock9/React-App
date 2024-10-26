const express = require('express')
const {
	getNews_list,
	getNewsById,
	getNews_last,
	getNews_pop,
	addNews_views,
} = require('../controllers/NewsController')
const router = express.Router()

router.get('/news_list', getNews_list)
router.get('/news_last', getNews_last)
router.get('/news_pop', getNews_pop)
router.get('/news_list/:id', getNewsById)
router.put('/addNews_views', addNews_views)

module.exports = router
