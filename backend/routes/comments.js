const express = require('express')
const {
	getNews_comments,
	Create_comment,
	updateLikes,
	getStateLikesDislikes,
	updateDisLikes,
} = require('../controllers/commentsController')
const router = express.Router()

router.get('/news_comments/:news_id', getNews_comments)
router.get('/news_comments/:comment_id/:user_id/:action', getStateLikesDislikes)

router.post('/news_comments/comment', Create_comment)
router.put('/news_comments/updateLikes', updateLikes)
router.put('/news_comments/updateDisLikes', updateDisLikes)
module.exports = router
