const express = require('express')
const {
	getNews_comments,
	Create_comment,
	updateLikesDislikes,
} = require('../controllers/commentsController')
const router = express.Router()

router.get('/news_comments/:news_id', getNews_comments)
router.post('/news_comments/comment', Create_comment)
router.put('/news_comments/updateLikesDislikes', updateLikesDislikes)
module.exports = router
