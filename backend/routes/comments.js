const express = require('express')
const {
	getNews_comments,
	Create_comment,
	updateLikesDislikesCount,
	updateUser_likes_dislikes,
	getStateLikesDislikes,
	DeleteStatus,
} = require('../controllers/commentsController')
const router = express.Router()

router.get('/news_comments/:news_id', getNews_comments)
router.get('/news_comments/:comment_id/:user_id/:action', getStateLikesDislikes)

router.post('/news_comments/comment', Create_comment)
router.put('/news_comments/updateLikesDislikes', updateLikesDislikesCount)
router.put(
	'/news_comments/updateUser_likes_dislikes',
	updateUser_likes_dislikes
)
router.delete('/news_comments/DeleteStatus', DeleteStatus)
module.exports = router
