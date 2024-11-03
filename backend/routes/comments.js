const express = require('express')
const {
	getNews_comments,
	Create_comment,
	updateLikesDislikesCount,
	updateUser_likes_dislikes,
	getIdLast_comment,
	DeleteStatus,
	getMatch_comments,
	Create_Match_comment,
} = require('../controllers/commentsController')
const router = express.Router()

router.get('/news_comments/:id/:user_id', getNews_comments)
router.post('/news_comments/comment', Create_comment)

router.get('/GetLastcomment', getIdLast_comment)

router.get('/match_comments/:id/:user_id', getMatch_comments)
router.post('/match_comments/comment', Create_Match_comment)

router.put('/news_comments/updateLikesDislikes', updateLikesDislikesCount)
router.put(
	'/news_comments/updateUser_likes_dislikes',
	updateUser_likes_dislikes
)
router.delete('/news_comments/DeleteStatus', DeleteStatus)
module.exports = router
