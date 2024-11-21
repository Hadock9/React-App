const express = require('express')
const {
	GET_LIST,
	CreateRequest,
	DeleteRequest,
	GetRequest,
	SetReply,
} = require('../controllers/supportController')

const router = express.Router()

router.post('/', CreateRequest)

// For react-admin
router.get('/', GET_LIST)
router.delete('/:id', DeleteRequest)
router.get('/:id', GetRequest)
router.put('/reply/:id', SetReply)
module.exports = router
