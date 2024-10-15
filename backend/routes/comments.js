const express = require('express')
const { getNews_comments } = require('../controllers/commentsController')
const router = express.Router()

router.get('/news_comments/:news_id', getNews_comments)

module.exports = router
