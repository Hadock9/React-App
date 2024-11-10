const express = require('express')
const {
	getNews_comments,
	Create_comment,
	updateLikesDislikesCount,
	updateUser_likes_dislikes,
	Delete_comment,
	DeleteStatus,
	update_comment,
	getMatch_comments,
	Create_Match_comment,
	GET_LIST,
} = require('../controllers/commentsController')
const router = express.Router()

router.get('/news_comments/:id/:user_id', getNews_comments)
router.post('/news_comments/comment', Create_comment)

router.delete('/delete_comment', Delete_comment)
router.put('/update_comment', update_comment)

router.get('/match_comments/:id/:user_id', getMatch_comments)
router.post('/match_comments/comment', Create_Match_comment)

router.put('/news_comments/updateLikesDislikes', updateLikesDislikesCount)
router.put(
	'/news_comments/updateUser_likes_dislikes',
	updateUser_likes_dislikes
)
router.delete('/news_comments/DeleteStatus', DeleteStatus)

// For react-admin
router.get('/', GET_LIST)

module.exports = router
